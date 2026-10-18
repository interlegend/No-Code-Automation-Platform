function validateGraph(nodes, edges) {
    if (!Array.isArray(nodes) || !Array.isArray(edges)) {
        throw new Error("nodes and edges must be arrays");
    }

    if (!nodes.every(n => n && typeof n === "object" && typeof n.id === "string" && n.id.trim() !== "" && typeof n.type === "string" && n.type.trim() !== "")) {
        throw new Error("every node must be an object with a valid id and type");
    }

    const nodeIds = new Set();
    nodes.forEach(node => {
        if (nodeIds.has(node.id)) {
            throw new Error("Duplicate node id");
        }
        nodeIds.add(node.id);
    })

    edges.forEach(edge => {
        if (edge === null || typeof edge !== "object") {
            throw new Error("Invalid edge");
        }

        if (typeof edge.target !== "string" || typeof edge.source !== "string") {
            throw new Error("edge.source or edge.target must be string");
        }

        if (edge.source.trim() === "" || edge.target.trim() === "") {
            throw new Error("edge.source or edge.target does not exist")
        }

        if (!nodeIds.has(edge.source)) {
            throw new Error("edge.source does not exist")

        }
        if (!nodeIds.has(edge.target)) {
            throw new Error("edge.target does not exist")

        }

    })

    const map = new Map();
    let count = 0;
    edges.forEach(edge => {
        count = map.get(edge.source);
        if (count === undefined) {
            count = 0;
        }
        map.set(edge.source, count + 1);
    })

    let c = 0;
    nodes.forEach(node => {
        if (node.type === "start") {
            c++;
        }
    })

    if (c > 1) {
        throw new Error("more than one start node");
    }
    if (c == 0) {
        throw new Error("no start node");
    }

    //REACHABILITY CHECK (BFS):
    const queue = [nodes.find(node => node.type === "start").id];
    const visited = new Set();
    visited.add(queue[0]);

    while (queue.length > 0) {
        const current = queue.shift();
        for (const edge of edges) {
            if (edge.source === current && !visited.has(edge.target)) {
                queue.push(edge.target);
                visited.add(edge.target);
            }
        }
    }

    if (visited.size != nodes.length) {
        throw new Error("Not all nodes are reachable");
    }

    return true;

}

export default validateGraph;