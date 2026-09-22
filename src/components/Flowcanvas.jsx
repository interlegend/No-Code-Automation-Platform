import { ReactFlow, Background, Controls, useNodesState, useEdgesState, addEdge, MarkerType } from "@xyflow/react"
import "@xyflow/react/dist/style.css";
import Triggers_nodes from './nodes/Triggers_nodes.jsx';
import Logic_nodes from './nodes/Logic_nodes.jsx';
import Browser_nodes from './nodes/Browser_nodes.jsx';
import Flow_nodes from './nodes/Flow_nodes.jsx';

const initialNodes = [
    {
        id: "schedule",
        type: "schedule",
        position: {
            x: 100,
            y: 100
        },
        data: {
            icon: "⚡",
            title: "Schedule",
            description: "Schedule a event to run"
        }
    },

    {
        id: "start",
        type: "start",
        position: {
            x: 100,
            y: 250
        },
        data: {
            icon: "▶️",
            title: "START",
            description: "Start trigger"
        }
    },

    {
        id: "interval",
        type: "interval",
        position: {
            x: 100,
            y: 350
        },
        data: {
            icon: "⏱️",
            title: "Interval",
            description: "Set interval for the workflow"
        }

    },
    {
        id: "condition",
        type: "condition",
        position: {
            x: 100,
            y: 400
        },
        data: {
            icon: "❓",
            title: "Condition",
            description: "Condition for the workflow"
        }

    },
    {
        id: "openwebsite",
        type: "openwebsite",
        position: {
            x: 100,
            y: 350
        },
        data: {
            icon: "🌐",
            title: "Open website",
            description: "Opens website Url"
        }

    },
    {
        id: "wait",
        type: "wait",
        position: {
            x: 100,
            y: 350
        },
        data: {
            icon: "⏳",
            title: "Wait",
            description: "Wait for a some time"
        }

    },
];

const initialEdges = [];

const nodeTypes = {
    schedule: Triggers_nodes,
    start: Triggers_nodes,
    interval: Triggers_nodes,
    condition: Logic_nodes,
    openwebsite: Browser_nodes,
    wait: Flow_nodes,

};

function Flowcanvas({ onNodeSelect }) {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = (connection) => {
        setEdges((currentEdges) => {
            return addEdge(connection, currentEdges);
        })
    }

    return (
        <div className="w-full h-full">
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