function Config({ selectedNode, setSelectedNode, setNodes }) {
    if (!selectedNode) {
        return null;
    }

    function closeNode() {
        setSelectedNode(null);
    }

    const fields = [];
    if (selectedNode.data?.config) {
        for (const key in selectedNode.data.config) {
            const field = selectedNode.data.config[key];

            fields.push(
                <div key={key} className="flex flex-col gap-1 mb-3">
                    <label className="text-xs font-semibold text-gray-600 uppercase">
                        {field.label || key}
                    </label>

                    {field.type === "dropdown" ? (
                        <select
                            value={field.value}
                            onChange={(e) => {
                                field.value = e.target.value;
                                setSelectedNode({ ...selectedNode });
                                if (setNodes) {
                                    setNodes((Nodes) =>
                                        Nodes.map((node) => (node.id === selectedNode.id ? { ...selectedNode } : node))
                                    );
                                }
                            }}
                            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            {field.options && field.options.map((opt) => (
                                <option value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    ) : (

                        <input
                            type={field.type || "text"}
                            value={field.value}
                            onChange={(e) => {
                                field.value = e.target.value;
                                setSelectedNode({ ...selectedNode });
                                if (setNodes) {
                                    setNodes((Nodes) =>
                                        Nodes.map((node) => (node.id === selectedNode.id ? { ...selectedNode } : node))
                                    );
                                }
                            }}
                            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder={`Enter ${field.label || key}...`}
                        />
                    )}
                </div>
            );
        }
    }

    return (
        <div className="shrink-0 w-[18%] h-full bg-white border border-gray-300 flex flex-col min-h-0">
            <div className="h-20 w-full bg-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="ml-2 p-2 rounded-md text-2xl">
                        <img src={selectedNode.data.icon} alt="icon" className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-2xl">{selectedNode.data.title}</div>
                </div>
                <button
                    className="flex justify-between mr-4 font-bold text-gray-600 cursor-pointer py-1 px-2 rounded-md hover:bg-gray-300 transition"
                    onClick={closeNode}
                >
                    X
                </button>
            </div>
            <div className="flex flex-col gap-2 w-full overflow-y-auto flex-1">
                <div className="m-4 p-4 border rounded-md bg-gray-100 font-light text-lg">
                    {selectedNode.data.description}
                </div>
                <div className="mx-4">
                    {fields}
                </div>
            </div>
        </div>
    );
}

export default Config;
