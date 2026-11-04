import { Handle, Position } from "@xyflow/react";

function Logic_nodes({ data }) {
    return (
        <>
            <div className="border-2 border-gray-200 shadow-sm w-50 h-30  items-center justify-center hover:border-gray-100 hover:shadow-md" style={{ overflow: 'visible' }}>
                <div className="font-semibold text-blue-700  h-[35%] bg-blue-100 flex justify-center items-center border-t-4">LOGIC</div>
                <div className="  h-[65%] bg-white flex justify-start px-2 py-2 flex-col gap-2">
                    <div className="font-bold flex items-center gap-2">
                        <img src={data.icon} alt="" className="w-5 h-5" />
                        <div>{data.title}</div>
                    </div>
                    <div className="font-light text-sm">{data.description}</div>
                </div>

            </div>
            <Handle
                id="bottom_left"
                type="source"
                position={Position.Bottom}
                style={{ left: '25%', bottom: '-6px' }}
                className="w-3! h-3! bg-green-600! border-2!  rounded-full! ring-2! ring-green-600! ring-offset-2! ring-offset-green-100! hover:bg-green! hover:ring-green! hover:ring-offset-green-600! hover:ring-3! hover:ring-offset-3! transition"
                isConnectableEnd={false}
            />

            <Handle
                id="bottom_right"
                type="source"
                position={Position.Bottom}
                style={{ left: '75%', bottom: '-6px' }}
                className="w-3! h-3! bg-red-600! border-2!  rounded-full! ring-2! ring-red-600! ring-offset-2! ring-offset-red-100! hover:bg-red! hover:ring-red! hover:ring-offset-red-600! hover:ring-3! hover:ring-offset-3! transition"
                isConnectableEnd={false}
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

export default Logic_nodes