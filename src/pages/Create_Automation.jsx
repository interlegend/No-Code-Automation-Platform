import Nav2 from '../components/Nav2.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Triggers from '../components/Triggers.jsx'
import Browser from '../components/Browser.jsx'
import Flow from '../components/Flow.jsx'
import Logic from '../components/Logic.jsx'
import Data from '../components/Data.jsx'
import Storage from '../components/Storage.jsx'
import Flowcanvas from '../components/Flowcanvas.jsx'
import Config from '../components/Config.jsx'
import { useState } from 'react'
function Create_Automation({ search, setsearch }) {
    const [selectedNode, setSelectedNode] = useState(null);

    return (
        <div className="flex flex-col w-full h-screen flex-1">
            <Nav2 />
            <div className=" flex-1 min-h-0 bg-slate-200  flex ">
                <div className="w-[18%] h-full  bg-white border border-gray-300 flex flex-col gap-4 min-h-0">
                    <div className="flex justify-between p-3 items-center">
                        <div className="flex flex-col gap-1">
                            <div className="font-bold">BLOCKS</div>
                            <div className="text-gray-500">Drag onto canvas to connect</div>
                        </div>
                        <div className="py-1 px-2 border border-gray-200 rounded-2xl bg-amber-100 text-amber-700">25 Blocks</div>
                    </div>
                    <div className="w-full p-4 border border-gray-200">
                        <Searchbar Search={search} onSearch={setsearch} Placeholder="Search blocks.." className="h-12 w-full outline-none" />
                    </div>
                    <div className="overflow-y-auto flex-1 space-y-10">
                        <Triggers />
                        <Browser />
                        <Logic />
                        <Flow />
                        <Data />
                        <Storage />
                    </div>
                </div>
                <div className=" bg-slate-200 border border-gray-300 flex-1 min-w-0 h-full">
                    <Flowcanvas onNodeSelect={setSelectedNode} />
                </div>
                <Config selectedNode={selectedNode} setSelectedNode={setSelectedNode} />

            </div>
        </div>
    )
}

export default Create_Automation