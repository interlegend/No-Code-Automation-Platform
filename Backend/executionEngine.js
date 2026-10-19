import validateGraph from './workflowValidator.js';

function executionEngine(nodes, edges) {

    validateGraph(nodes, edges);

    const start = nodes.find(node => node.type === "start");
    let executionQueue = [start];
    let executionOrder = [];
    let visited = new Set();
    visited.add(start.id);

    const map = new Map();
    const nodeOutputs = new Map();

    while (executionQueue.length > 0) {
        const current = executionQueue.shift();
        executionOrder.push(current.data.title);
        switch (current.type) {
            case "set_variable": {
                const key = current.data.config.variable_name.value;
                const val = current.data.config.value.value;
                map.set(key, val);
                break;
            }
            case "get_variable": {
                const key = current.data.config.variable_name.value;
                const val = map.get(key);
                nodeOutputs.set(current.data.title, val);
                break;
            }
            case "calculate": {
                let firstValue = current.data.config.first_value.value;
                const operator = current.data.config.operator.value;
                let secondValue = current.data.config.second_value.value;
                const resultVariable = current.data.config.result_variable.value;

                if (map.has(firstValue)) {
                    firstValue = map.get(firstValue);
                }
                if (map.has(secondValue)) {
                    secondValue = map.get(secondValue);
                }

                let num1 = Number(firstValue);
                let num2 = Number(secondValue);



                switch (operator) {
                    case "+":
                        map.set(resultVariable, num1 + num2);
                        break;
                    case "-":
                        map.set(resultVariable, num1 - num2);
                        break;
                    case "*":
                        map.set(resultVariable, num1 * num2);
                        break;
                    case "/":
                        if (num2 === 0) {
                            throw new Error("Invalid Operation: Division or Modulo by Zero");
                        }
                        map.set(resultVariable, num1 / num2);
                        break;
                    case "%":
                        if (num2 === 0) {
                            throw new Error("Invalid Operation: Division or Modulo by Zero");
                        }
                        map.set(resultVariable, num1 % num2);
                        break;
                    default:
                        throw new Error(`Unknown Operator: ${operator}`);
                }
                nodeOutputs.set(current.data.title, map.get(resultVariable));
                break;
            }
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
        executionOrder,
        variables: Object.fromEntries(map),
        nodeOutputs: Object.fromEntries(nodeOutputs),
    };
}

export default executionEngine;