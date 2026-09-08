import Nav from "./Nav.jsx"
import UseTemplate from "./UseTemplate.jsx"
import Searchbar from "./Searchbar.jsx"
function Templates({ search, setsearch }) {
    const templates = [
        {
            name: "FFCS Slot Monitor",
            des: "Check a selected FFCS slot every minute and notify immediately when a seat opens up."
        },
        {
            name: "LMS Assignment Monitor",
            des: "Check Moodle/Canvas every morning, gather pending assignments, sort by deadline, and notify."
        },
        {
            name: "Exam Schedule Watcher",
            des: "Monitor CAT/FAT schedule and seating arrangements daily and notify if room or date changes."
        },
        {
            name: "Attendance Monitor",
            des: "Check attendance every evening, compare against the 75% threshold, and alert if any subject is falling short."
        }
    ];
    const filteredTemplates = templates.filter(template =>
        template.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            <Nav />
            <div className="flex flex-col h-screen w-full mx-40 gap-5">
                <div className="flex flex-col gap-4 my-10 border-b-2 pb-7 border-gray-300 w-[80%]">
                    <div className="bg-amber-50 w-fit rounded-2xl px-4 py-1.5">University Workflow Blueprints</div>
                    <h1 className="font-bold text-3xl">Automation Templates</h1>
                    <p className="font-light text-xl max-w-2xl">Prebuilt, ready-to-run automation templates designed specifically for university students, course registration, LMS systems, and faculty tasks.</p>
                    <div className="flex gap-5 bg-gray-200 w-fit rounded-2xl px-4 py-3">
                        <div className="hover:text-indigo-700 text-indigo-600 ">All Roles</div>
                        <div className="hover:text-black text-gray-600 font-medium">Students</div>
                        <div className="hover:text-black text-gray-600 font-medium">Facultys</div>
                    </div>
                </div>
                <div className=""><Searchbar Search={search} onSearch={setsearch} /></div>
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

export default Templates