import validateGraph from './workflowValidator.js';

async function executionEngine(nodes, edges) {

    validateGraph(nodes, edges);

    const context = {
        variables: new Map(),
        nodeOutputs: new Map(),
        execution: {
            stopped: false,
            status: null,
            message: null
        }
    }

    let executionOrder = [];

    const forEach = async (current,context) => {
        const arrName = current.data.config.list.value;
        const item = current.data.config.item_var.value;
        const arr = context.variables.get(arrName);
        let selectedHandle = "bottom_left";
        const body = getNextNode(current,edges,nodes,selectedHandle);
        for(const element of arr){
            if(context.execution.stopped == true){
                break;
            }
            context.variables.set(item,element);
            await executePath(body, executionOrder, current.id);
        }
    }

    const stop = (current,context) => {
        const status = current.data.config.status.value;
        const message = current.data.config.message.value;
        context.execution.stopped = true;
        context.execution.status = status;
        context.execution.message = message;
    }

    const wait = async (current, context) => {
        const duration = current.data.config.duration.value;
        const unit = current.data.config.unit.value;
        let multiplier;
        switch(unit.toLowerCase()){ 
        case "milliseconds" :{
            multiplier = 1;
            break;
        }
        case "seconds": {
            multiplier = 1000;
            break;
        }
        case "minutes":{
            multiplier = 60000;
            break;
        }
        default: {
            throw new Error("Invalid option:");
        }
    }
        const ms = duration * multiplier;
            await new Promise(resolve => {
                setTimeout(resolve,ms);
            }
        )

    }

    const loop = async (current, context) => {
        const icount = current.data.config.iterations.value
        let selectedHandle = "bottom_left";
        const body = getNextNode(current, edges, nodes, selectedHandle);

        for (let i = 0; i < icount; i++) {
            if(context.execution.stopped == true){
                break;
            }
            await executePath(body, executionOrder, current.id);
        }
    }

    const condition = (current, context) => {
        let firstValue = current.data.config.first_value.value;
        let secondValue = current.data.config.second_value.value;
        let operator = current.data.config.operator.value;

        let result = true;

        switch (operator) {
            case "==":
                result = Number(firstValue) == Number(secondValue);
                return result;
            case "!=":
                result = Number(firstValue) != Number(secondValue);
                return result;

            case ">":
                result = Number(firstValue) > Number(secondValue);
                return result;
            case "<":
                result = Number(firstValue) < Number(secondValue);
                return result;

            case "contains":
                if (typeof firstValue !== "string" || typeof secondValue !== "string") {
                    throw new Error("Invalid input only string allowed for this operator");
                }
                result = firstValue.includes(secondValue);
                return result;

            default:
                throw new Error(`Unknown Operator: ${operator}`);
        }
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
        "start": () => { },
        "set_variable": setVariable,
        "get_variable": getVariable,
        "calculate": calculate,
        "condition": condition,
        "loop": loop,
        "wait": wait,
        "stop" : stop,
        "for_each": forEach
    }

    const getNextNode = (current, edges, nodes, selectedHandle) => {
        for (const edge of edges) {
            if (edge.source == current.id) {
                if (selectedHandle && edge.sourceHandle === selectedHandle) {
                    return nodes.find(node => node.id == edge.target);
                }
                if (!selectedHandle) {
                    return nodes.find(node => node.id == edge.target);
                }
            }
        }
        return null;
    }

    const executeNode = async (node) => {
        const handle = caseHandler[node.type];
        if (handle) {
            let handleReturn = await handle(node, context);
            return handleReturn;
        }
        else {
            throw new Error(`Invalid Node Type: ${node.type}`);
        }
    }

    const executePath = async (current, executionOrder, stopAt) => {
        while (current && current.id != stopAt && context.execution.stopped != true) {
            executionOrder.push(current.id);
            let selectedHandle;
            let result = await executeNode(current);
            if (current.type === "condition") {
                selectedHandle = result ? "bottom_left" : "bottom_right";
            }
            if (current.type === "loop") {
                selectedHandle = "bottom_right";
            }

            if(current.type === "for_each"){
                selectedHandle = "bottom_right";
            }
            
            current = getNextNode(current, edges, nodes, selectedHandle);
        }
        return executionOrder;
    }

    const start = nodes.find(node => node.type === "start");

    executionOrder = await executePath(start, executionOrder);

    const execution = context.execution;
    return {
        execution,
        nodes,
        executionOrder,
        variables: Object.fromEntries(context.variables),
        nodeOutputs: Object.fromEntries(context.nodeOutputs),
    };
}
export default executionEngine;