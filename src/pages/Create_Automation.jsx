import Nav2 from '../components/Nav2.jsx'
import Searchbar from '../components/Searchbar.jsx'
function Create_Automation({ search, setsearch }) {
    return (
        <>
            <Nav2 />
            <div className="w-full min-h-screen bg-slate-200  grid grid-cols-[18%_1fr_18%]">
                <div className="h-full w-full bg-white border border-gray-300 flex flex-col gap-4">
                    <div className="flex justify-between p-3 items-center">
                        <div className="flex flex-col gap-1">
                            <div className="font-bold">BLOCKS</div>
                            <div className="text-gray-500">Drag onto canvas to connect</div>
                        </div>
                        <div className="py-1 px-2 border border-gray-200 rounded-2xl bg-amber-100 text-amber-700">38 Blocks</div>
                    </div>
                    <div className="w-full p-4 border border-gray-200">
                        <Searchbar Search={search} onSearch={setsearch} Placeholder="Search blocks.." className="h-12 w-full outline-none" />
                    </div>
                    <div></div>
                </div>
                <div className="h-full w-full bg-slate-200 border border-gray-300"></div>
                <div className="h-full w-full bg-white border border-gray-300"></div>
            </div>
        </>
    )
}

export default Create_Automation