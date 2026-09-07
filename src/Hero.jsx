function Hero() {
    return (
        <div className="flex flex-col items-center w-screen h-screen">
            <div className="h-fit w-[90%] m-20  mr-10 border border-gray-100 flex flex-col grow gap-5 p-5 bg-white rounded-2xl">
                <div className="text-lg font-semibold border-gray-100 border rounded-3xl px-4 py-2 w-fit bg-gray-100 text-purple-700" > Scratch for Campus Automation </div>
                <div className="text-4xl font-bold max-w-2xl">Automate the repetitive parts of campus life.</div>
                <div className="text-2xl max-w-2xl">Build workflows visually using simple blocks. No coding required. Monitor course registration, LMS deadlines, attendance thresholds, and exam updates.</div>

            </div>
            <div className="h-fit m-20 mr-10 rounded-2xl  flex flex-col gap-2 p-4 ">
                <div className="text-2xl">HOW IT WORKS</div>
                <div className="text-2xl font-bold">Visual Campus Programming</div>
                <div className="grid grid-cols-4 gap-4  place-items-start ">
                    <div className="bg-white border-gray-200 rounded-2xl p-4 max-w-2xl flex flex-col gap-2 h-full">
                        <div className="py-2 px-4 border border-gray-100 bg-amber-50 w-fit rounded-[30%]">1</div>
                        <div className="font-bold text-xl">Choose Blocks</div>
                        <div>
                            Select triggers, campus portals, web actions, and logic nodes from the block palette.
                        </div>
                    </div>
                    <div className="bg-white border-gray-200 rounded-2xl p-4 max-w-2xl h-full">
                        <div className="py-2 px-4 border border-gray-100 bg-blue-100 w-fit rounded-[30%]">2</div>
                        <div className="font-bold text-xl">Connect Them</div>
                        <div>Drag handles between blocks to define execution sequence and conditional branches.
                        </div>
                    </div>
                    <div className="bg-white border-gray-200 rounded-2xl p-4 max-w-2xl h-full">
                        <div className="py-2 px-4 border border-gray-100 bg-purple-50 w-fit rounded-[30%]">3</div>
                        <div className="font-bold text-xl">Configure Them</div>
                        <div>Specify course codes, desired slots, attendance thresholds, and alert notifications.
                        </div>

                    </div>
                    <div className="bg-white border-gray-200 rounded-2xl p-4 max-w-2xl h-full">
                        <div className="py-2 px-4 border border-green-50 bg-green-100 w-fit rounded-[30%]">4</div>
                        <div className="font-bold text-xl">Run Simulation</div>
                        <div>Test your workflow in the interactive simulation runner and inspect mock execution outputs.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero