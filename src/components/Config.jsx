


function Config({ selectedNode, setSelectedNode }) {

    function toggleNode() {
        setSelectedNode(null);
    }

    if (!selectedNode) {
        return null;
    }
    else {
        return (
            <>
                <div className="shrink-0 w-[18%] h-full bg-white border border-gray-300">
                    <div className="h-20 w-full bg-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="ml-2 p-2 rounded-md text-2xl">{selectedNode.data.icon}</div>
                            <div className="font-bold text-2xl">{selectedNode.data.title}</div>
                        </div>
                        <button className="flex justify-between mr-4 font-bold text-gray-600 cursor-pointer py-1 px-2 rounded-md hover:bg-gray-300 transition" onClick={toggleNode}>X</button>
                    </div>
                    <div className="flex flex-col gap-4">  <div className="m-4 p-4 border rounded-md bg-gray-100 font-light text-lg">{selectedNode.data.description}</div>

                    </div>
                </div>
            </>
        )
    }
}

export default Config