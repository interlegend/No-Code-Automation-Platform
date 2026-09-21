import { Handle, Position } from "@xyflow/react";

function Flow_nodes({ data }) {
    return (
        <>
            <div className="border-2 border-gray-200 shadow-sm w-50 h-30  items-center justify-center hover:border-gray-100 hover:shadow-md">
                <div className="font-semibold text-green-700  h-[35%] bg-green-100 flex justify-center items-center border-t-4">FLOW</div>
                <div className="  h-[65%] bg-white flex justify-start px-2 py-2 flex-col gap-2">
                    <div className="font-bold">{data.icon}{data.title}</div>
                    <div className="font-light text-sm">{data.description}</div>
                </div>
            </div>
            <Handle
                id="bottom"
                type="source"
                position={Position.Bottom}
                isConnectableEnd={false}
                className="w-3! h-3! bg-zinc-800! border-2!  rounded-full! ring-2! ring-zinc-800! ring-offset-2! ring-offset-zinc-100! hover:bg-black! hover:ring-black! hover:ring-offset-zinc-800! hover:ring-3! hover:ring-offset-3! transition"
            />
            <Handle
                id="top"
                type="target"
                position={Position.Top}
                className="w-3! h-3! bg-zinc-800! border-2!  rounded-full! ring-2! ring-zinc-800! ring-offset-2! ring-offset-zinc-100! hover:bg-black! hover:ring-black! hover:ring-offset-zinc-800! hover:ring-3! hover:ring-offset-3! transition"
            />
        </>
    );
}

export default Flow_nodes