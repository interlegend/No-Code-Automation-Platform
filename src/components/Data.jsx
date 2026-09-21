import play from '../assets/play.png'
function Data() {

    return (
        <div className="min-h-10 w-[80%] mx-auto border-2 border-gray-200 bg-white rounded-lg ">
            <div className="h-10 w-full py-2 bg-gray-100 rounded-t-lg font-bold px-5">DATA
            </div>
            <div className="flex flex-col gap-5 p-2">
                <div className="w-full h-fit flex gap-2 justify-start px-5 items-center border  hover:bg-indigo-100 hover:border-gray-400 transition border-transparent cursor-pointer rounded-lg p-2">
                    <img src={play} className="h-5 w-5" />
                    <div className="flex flex-col">
                        <div className="font-semibold ">Set Variable
                        </div>
                        <div className="text-sm max-w-2xl">Set a value for a variable</div>
                    </div>
                </div>
                <div className="w-full h-fit flex gap-2 justify-start px-5 items-center border hover:bg-indigo-100 hover:border-gray-400 transition border-transparent cursor-pointer rounded-lg p-2">
                    <img src={play} className="bg-white h-5 w-5" />
                    <div className="flex flex-col">
                        <div className="font-semibold">Get variable
                        </div>
                        <div className="text-sm max-w-2xl">Get value of a variable</div>
                    </div>
                </div>
                <div className="w-full h-fit flex gap-2 justify-start px-5 items-center border hover:bg-indigo-100 hover:border-gray-400 transition border-transparent cursor-pointer rounded-lg p-2">
                    <img src={play} className="bg-white h-5 w-5" />
                    <div className="flex flex-col">
                        <div className="font-semibold">Calculate
                        </div>
                        <div className="text-sm max-w-2xl">Perform a calculation based on data</div>
                    </div>
                </div>

                <div className="w-full h-fit flex gap-2 justify-start px-5 items-center border hover:bg-indigo-100 hover:border-gray-400  border-transparent cursor-pointer transition rounded-lg p-2">
                    <img src={play} className="bg-white h-5 w-5" />
                    <div className="flex flex-col">
                        <div className="font-semibold">Format
                        </div>
                        <div className="text-sm max-w-2xl">Format data</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data