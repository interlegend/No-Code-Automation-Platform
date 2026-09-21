import play from '../assets/play.png'
function Flow() {

    return (
        <div className="min-h-10 w-[80%] mx-auto border-2 border-gray-200 bg-white rounded-lg ">
            <div className="h-10 w-full py-2 bg-gray-100 rounded-t-lg font-bold px-5">FLOW
            </div>
            <div className="flex flex-col gap-5 p-2">
                <div className="w-full h-fit flex gap-2 justify-start px-5 items-center border hover:bg-indigo-100 hover:border-gray-400  border-transparent cursor-pointer transition rounded-lg p-2">
                    <img src={play} className="bg-white h-5 w-5" />
                    <div className="flex flex-col">
                        <div className="font-semibold">Wait
                        </div>
                        <div className="text-sm max-w-2xl">Wait for a some time</div>
                    </div>
                </div>
                <div className="w-full h-fit flex gap-2 justify-start px-5 items-center border hover:bg-indigo-100 hover:border-gray-400 transition border-transparent cursor-pointer rounded-lg p-2">
                    <img src={play} className="bg-white h-5 w-5" />
                    <div className="flex flex-col">
                        <div className="font-semibold">Repeat
                        </div>
                        <div className="text-sm max-w-2xl">repeat a task</div>
                    </div>
                </div>
                <div className="w-full h-fit flex gap-2 justify-start px-5 items-center border hover:bg-indigo-100 hover:border-gray-400 transition border-transparent cursor-pointer rounded-lg p-2">
                    <img src={play} className="bg-white h-5 w-5" />
                    <div className="flex flex-col">
                        <div className="font-semibold">For Each
                        </div>
                        <div className="text-sm max-w-2xl">Loop for each element</div>
                    </div>
                </div>

                <div className="w-full h-fit flex gap-2 justify-start px-5 items-center border hover:bg-indigo-100 hover:border-gray-400  border-transparent cursor-pointer transition rounded-lg p-2">
                    <img src={play} className="bg-white h-5 w-5" />
                    <div className="flex flex-col">
                        <div className="font-semibold">Stop
                        </div>
                        <div className="text-sm max-w-2xl">Stop workflow</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flow