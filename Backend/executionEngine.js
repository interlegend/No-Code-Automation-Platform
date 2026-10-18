import validateGraph from './workflowValidator.js';

function executionEngine(nodes, edges) {
    const result = {
        status: validateGraph(nodes, edges),
        nodescount: nodes.length,
        edgescount: edges.length
    }

    return result;
}

export default executionEngine;