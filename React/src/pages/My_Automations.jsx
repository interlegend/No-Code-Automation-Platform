import Nav from "../components/Nav.jsx"
import Searchbar from "../components/Searchbar.jsx"
import UseTemplate from "../components/UseTemplate.jsx"
function My_Automations({ search, setsearch }) {

    return (
        <>
            <Nav />
            <div className="flex flex-col h-screen w-full mx-40 gap-10 my-10">
                <div className="border-b pb-7 border-gray-300 max-w-[80%]">
                    <h1 className="font-bold text-2xl">My Automations  </h1>
                    <p className="font-light text-xl">Manage, configure and test your campus automation workflows.</p>
                </div>
                <div className=""><Searchbar onSearch={setsearch} Search={search} /></div>
                <div className="grid grid-cols-3 gap-4  place-items-start max-w-[80%]">
                    <div className="bg-white border-gray-200 rounded-2xl p-4 max-w-2xl flex flex-col gap-4 h-full">
                        <div className="py-2 px-4 border border-gray-100 bg-amber-50 w-fit rounded-[30%]">1</div>
                        <div className="font-bold text-xl">FFCS Slot Monitor</div>
                        <div>
                            Check a selected FFCS slot every minute and notify immediately when a seat opens up.
                        </div>
                        <UseTemplate />
                    </div>
                    <div className="bg-white border-gray-200 rounded-2xl p-4 max-w-2xl h-full flex flex-col gap-4">
                        <div className="py-2 px-4 border border-gray-100 bg-blue-100 w-fit rounded-[30%]">2</div>
                        <div className="font-bold text-xl">LMS Assignment Monitor</div>
                        <div>Drag handles between blocks to define execution sequence and conditional branches.
                        </div>
                        <UseTemplate />
                    </div>
                    <div className="bg-white border-gray-200 rounded-2xl p-4 max-w-2xl h-full flex flex-col gap-4">
                        <div className="py-2 px-4 border border-gray-100 bg-purple-50 w-fit rounded-[30%]">3</div>
                        <div className="font-bold text-xl">Attendance Monitor</div>
                        <div>Specify course codes, desired slots, attendance thresholds, and alert notifications.
                        </div>
                        <UseTemplate />
                    </div>
                    <div className="bg-white border-gray-200 rounded-2xl p-4 max-w-2xl h-full flex flex-col gap-4">
                        <div className="py-2 px-4 border border-green-50 bg-green-100 w-fit rounded-[30%]">4</div>
                        <div className="font-bold text-xl">Exam Schedule Watcher</div>
                        <div>Test your workflow in the interactive simulation runner and inspect mock execution outputs.
                        </div>
                        <UseTemplate />
                    </div>
                </div>
            </div>
        </>
    )
}

export default My_Automations