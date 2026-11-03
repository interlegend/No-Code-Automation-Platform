import validateGraph from './workflowValidator.js';

async function executionEngine(nodes, edges) {

    validateGraph(nodes, edges);

    const start = nodes.find(node => node.type === "start");
    let executionQueue = [start];
    let executionOrder = [];
    let visited = new Set();
    visited.add(start.id);

    const context = {
        variables: new Map(),
        nodeOutputs: new Map()
    }


    const setVariable = (current, context) => {
        const key = current.data.config.variable_name.value;
        const val = current.data.config.value.value;
        if (!key || val === undefined) {
            return null;
        }
        context.variables.set(key, val);
    };

    const getVariable = (current, context) => {
        const key = current.data.config.variable_name.value;
        const val = context.variables.get(key);
        if (!key || !context.variables.has(key)) {
            return null;
        }
        context.nodeOutputs.set(current.id, val);
    }

    const calculate = (current, context) => {
        let firstValue = current.data.config.first_value.value;
        const operator = current.data.config.operator.value;
        let secondValue = current.data.config.second_value.value;
        const resultVariable = current.data.config.result_variable.value;

        if (context.variables.has(firstValue)) {
            firstValue = context.variables.get(firstValue);
        }
        if (context.variables.has(secondValue)) {
            secondValue = context.variables.get(secondValue);
        }

        if (!resultVariable) return null;

        let num1 = Number(firstValue);
        let num2 = Number(secondValue);

        switch (operator) {
            case "+":
                context.variables.set(resultVariable, num1 + num2);
                break;
            case "-":
                context.variables.set(resultVariable, num1 - num2);
                break;
            case "*":
                context.variables.set(resultVariable, num1 * num2);
                break;
            case "/":
                if (num2 === 0) {
                    throw new Error("Invalid Operation: Division or Modulo by Zero");
                }
                context.variables.set(resultVariable, num1 / num2);
                break;
            case "%":
                if (num2 === 0) {
                    throw new Error("Invalid Operation: Division or Modulo by Zero");
                }
                context.variables.set(resultVariable, num1 % num2);
                break;
            default:
                throw new Error(`Unknown Operator: ${operator}`);
        }
        context.nodeOutputs.set(current.id, context.variables.get(resultVariable));
    }

    const caseHandler = {
        "set_variable": setVariable,
        "get_variable": getVariable,
        "calculate": calculate,
    }

    while (executionQueue.length > 0) {
        const current = executionQueue.shift();
        executionOrder.push(current.id);

        const type = current.type;
        const handle = caseHandler[type];
        if (handle) {
            await handle(current, context);
        }
        else {
            throw new Error(`Invalid Node Type: ${type} `);
        }


        for (const edge of edges) {

            if (edge.source === current.id && !visited.has(edge.target)) {
                const targetnode = nodes.find(node => node.id === edge.target);
                if (targetnode) {
                    executionQueue.push(targetnode);
                    visited.add(targetnode.id);
                }
            }
        }
    }

    return {
        nodes,
        executionOrder,
        variables: Object.fromEntries(context.variables),
        nodeOutputs: Object.fromEntries(context.nodeOutputs),
    };
}

export default executionEngine;