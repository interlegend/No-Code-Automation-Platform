import { ReactFlow, Background, Controls, useNodesState, useEdgesState, addEdge, MarkerType, useReactFlow, } from "@xyflow/react"
import "@xyflow/react/dist/style.css";
import Triggers_nodes from './nodes/Triggers_nodes.jsx';
import Logic_nodes from './nodes/Logic_nodes.jsx';
import Browser_nodes from './nodes/Browser_nodes.jsx';
import Flow_nodes from './nodes/Flow_nodes.jsx';
import Data_nodes from './nodes/Data_nodes.jsx';
import Storage_nodes from './nodes/Storage_nodes.jsx';



const initialNodes = [];

const initialEdges = [];

const nodeTypes = {
    // Triggers
    start: Triggers_nodes,
    schedule: Triggers_nodes,
    interval: Triggers_nodes,
    webhook: Triggers_nodes,

    // Browser
    openwebsite: Browser_nodes,
    url: Browser_nodes,
    click: Browser_nodes,
    text: Browser_nodes,
    find_element: Browser_nodes,
    read_text: Browser_nodes,

    // Logic
    condition: Logic_nodes,
    switch: Logic_nodes,
    loop: Logic_nodes,
    error_handling: Logic_nodes,

    // Flow
    wait: Flow_nodes,
    repeat: Flow_nodes,
    for_each: Flow_nodes,
    stop: Flow_nodes,

    // Data
    set_variable: Data_nodes,
    get_variable: Data_nodes,
    calculate: Data_nodes,
    format: Data_nodes,

    // Storage
    save_value: Storage_nodes,
    get_value: Storage_nodes,
};

function Flowcanvas({
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    setNodes,
    setEdges,
    onNodeSelect
}) {




    const { screenToFlowPosition } = useReactFlow();

    const handleDragOver = (event) => {
        event.preventDefault();
    }

    const handleDrop = (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("Drag");
        const item = JSON.parse(data);
        console.log(item);

        const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY
        });

        const newNode = {
            id: crypto.randomUUID(),
            type: item.type,
            position: position,
            data: {
                icon: item.icon,
                title: item.name,
                description: item.description,
                config: item.config ? JSON.parse(JSON.stringify(item.config)) : {} //deep copy not shallow as its not referencing same objects
            }
        };

        setNodes((currentNodes) => [
            ...currentNodes,
            newNode
        ]);
    }



    const onConnect = (connection) => {
        setEdges((currentEdges) => {
            return addEdge(connection, currentEdges);
        })
    }

    return (
        <div className="w-full h-full" onDragOver={handleDragOver} onDrop={handleDrop}>
            <ReactFlow nodes={nodes} onNodesChange={onNodesChange} edges={edges} onEdgesChange={onEdgesChange} onConnect={onConnect} nodeTypes={nodeTypes}
                elevateEdgesOnSelect={true}
                defaultEdgeOptions={{
                    type: "simplebezier",
                    style: {
                        strokeWidth: 3,
                        stroke: "black",
                        color: "black",



                    },
                    markerEnd: {
                        type: MarkerType.ArrowClosed,
                        width: 12,
                        height: 12,
                        color: 'black',
                    },
                }}
                connectionLineType="simplebezier"
                connectionLineStyle={{
                    strokeWidth: 3,
                    stroke: "#a1a1aa",
                    strokeDasharray: "5,5"

                }}
                onNodeClick={(event, node) => {
                    console.log("Node clicked:", node);
                    onNodeSelect(node);
                }}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default Flowcanvas