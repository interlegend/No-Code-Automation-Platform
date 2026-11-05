import play from '../assets/play.png';
import { useState } from 'react';
function Execution_results({ onClose, Executionorder, variables, nodeOutputs, displaynodes }) {

    const stats = [
        {
            id: 1,
            value: '4',
            label: 'Nodes Executed',
            icon: <img src={play} className="h-10 w-10" />,
            iconBg: 'bg-purple-50',
        },
        {
            id: 2,
            value: '3',
            label: 'Edges Traversed',
            icon: <img src={play} className="h-10 w-10" />,
            iconBg: 'bg-blue-50',
        },
        {
            id: 3,
            value: '2',
            label: 'Variables Created',
            icon: <img src={play} className="h-10 w-10" />,
            iconBg: 'bg-indigo-50',
        },
        {
            id: 4,
            value: '0.02s',
            label: 'Execution Time',
            icon: <img src={play} className="h-10 w-10" />,
            iconBg: 'bg-red-50',
        },
    ];

    const [selectedNode, setSelectedNode] = useState({});

    const findNode = (nodeid) => {
        setSelectedNode(displaynodes.find((n) => n.id === nodeid))
    }

    const getDisplayName = (nodeId) => {
        const node = displaynodes.find(n => n.id === nodeId);

        if (!node) return nodeId;

        const sameTitleNodes = displaynodes.filter(
            n => n.data.title === node.data.title
        );

        const index = sameTitleNodes.findIndex(
            n => n.id === nodeId
        );

        return `${node.data.title} ${index + 1}`;
    };

    return (



        < div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" >
            <div className="h-auto w-auto rounded-xl bg-white p-6 shadow-2xl max-h-[80%] overflow-y-auto">
                <div className="flex w-full justify-between">
                    <h1 className="flex gap-2 justify-center items-center"><img src={play} className="h-10 w-10" />
                        <div className="flex flex-col ">
                            <h1 className="font-bold">Execution Results</h1>
                            <div>Workflow executed successfully</div>
                        </div>

                    </h1>
                    <div className="flex gap-4 justify-center items-center
                    ">
                        <div className="flex flex-col gap-2 ">
                            <div className="px-2 py-1 bg-green-200 text-green-600 rounded-full font-semibold full text-sm w-fit self-end">Success
                            </div>
                            <h1>Executed at 12:52PM.24 April 2025</h1>
                        </div>
                        <button className="font-semibold text-xl border-transparent-2 shadow-md p-2 hover:bg-gray-100 hover:cursor-pointer" onClick={onClose}>X</button>
                        <br />


                    </div>
                </div>
                <br />
                <div className="grid grid-cols-4 gap-4 ">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col gap-2 border-2 border-gray-200 p-3 rounded-md ">
                            <h1 className="font-bold text-lg">{stat.value}</h1>
                            <div className="text-md text-gray-700">{stat.label}</div>
                        </div>
                    ))}
                </div>
                <br />
                <div className="grid grid-cols-2 gap-4 ">
                    <div className="border-2 border-gray-200 p-3 rounded-md min-h-auto flex-1">
                        <h1 className="font-bold text-lg">Execution Order</h1>
                        <div className="flex flex-col gap-2 ">{Executionorder.map(
                            (nodeid, i) => <div key={`${nodeid}-${i}`} className="flex gap-4 items-center ">
                                <div className="rounded-full w-6 h-6 bg-green-200 text-center font-semibold">{i + 1}</div>
                                <div className="font-semibold border-2 border-gray-200 p-2 cursor-pointer" onClick={() => { findNode(nodeid) }}>{getDisplayName(nodeid)}</div>
                            </div>
                        )}
                        </div>
                    </div>
                    <div className="border-2 border-gray-200 p-3 rounded-md h-full min-h-auto ">
                        <div className="font-bold">
                            Node Details
                        </div>
                        <div className="flex flex-col gap-4 my-2">
                            <div className="flex gap-2 justify-start items-center">
                                <img src={play} className="h-7 w-7" />
                                <div className="flex flex-col gap-1 text-sm">
                                    <div className="font-bold">{selectedNode?.data?.title}</div>
                                    <div>
                                        {selectedNode?.data?.description}</div>
                                </div>
                                <div className="px-2 py-1 bg-green-200 text-green-600 rounded-full font-semibold full text-sm">Success</div>
                            </div>

                            <div className="m-2 h-auto w-auto border-2 border-gray-200 bg-slate-100 p-2 flex flex-col gap-2 rounded-md">
                                <h1 className="font-semibold">Configuration</h1>
                                <div className="border-2 border-gray-200 h-auto w-auto p-1 bg-slate-100 rounded-md">
                                    <table className="text-left w-full">
                                        <tbody className="divide-y divide-slate-300 ">

                                            {Object.keys(selectedNode?.data?.config || {}).map(
                                                (key) => {
                                                    return (
                                                        <tr key={key} className="divide-x divide-slate-300">
                                                            <td className="px-4 py-3 text-gray-500 font-semibold">{selectedNode?.data?.config[key]?.label}
                                                            </td>
                                                            <td className="px-4 py-3 font-bold">{selectedNode?.data?.config[key]?.value}
                                                            </td>

                                                        </tr>
                                                    )
                                                }
                                            )
                                            }



                                        </tbody>
                                    </table>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="border-2 border-gray-200 p-3 rounded-md h-full">
                        <div> <h1 className="font-bold text-lg">Variables</h1>
                            <table className="w-full text-left border-2 rounded-md border-gray-200 my-2">
                                <thead className="divide-y divide-slate-200 p-2">
                                    <tr className="divide-x divide-slate-200 p-2 bg-gray-100">
                                        <th className="px-4 py-3  font-semibold" >
                                            Variable Name
                                        </th>
                                        <th className="px-4 py-3  font-semibold">
                                            Value
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {Object.keys(variables || {}).map(
                                        (key) => (
                                            <tr key={key} className="divide-x divide-slate-200">
                                                <td className="px-4 py-3  font-semibold">{key}
                                                </td>
                                                <td className="px-4 py-3 font-bold">{variables[key]}
                                                </td>

                                            </tr>
                                        )
                                    )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="border-2 border-gray-200 p-3 rounded-md h-full">
                        <h1 className="font-bold text-lg">All Node Outputs</h1>
                        <table className="w-full text-left border-2 rounded-md border-gray-200 my-2">
                            <thead className="divide-y divide-slate-200 p-2">
                                <tr className="divide-x divide-slate-200 p-2 bg-gray-100">
                                    <th className="px-4 py-3  font-semibold" >
                                        Node Name
                                    </th>
                                    <th className="px-4 py-3  font-semibold">
                                        Output
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {Object.keys(nodeOutputs || {}).map(
                                    (key) => (
                                        <tr key={key} className="divide-x divide-slate-200">
                                            <td className="px-4 py-3  font-semibold">{getDisplayName(key)}
                                            </td>
                                            <td className="px-4 py-3 font-bold">{nodeOutputs[key]}
                                            </td>
                                        </tr>
                                    )
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Execution_results