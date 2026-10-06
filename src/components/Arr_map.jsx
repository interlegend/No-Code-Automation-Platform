function Arr_map({ arr, Title }) {

    const handleDragStart = (event, item) => {
        event.dataTransfer.setData("Drag", JSON.stringify(item));
    }



    return (
        <div className="min-h-10 w-[80%] mx-auto border-2 border-gray-200 bg-white rounded-lg ">
            <div className="h-10 w-full py-2 bg-gray-100 rounded-t-lg font-bold px-5">{Title}
            </div>
            <div className="flex flex-col gap-5 p-2">
                <div className="w-full h-fit flex flex-col gap-2 justify-start  items-center ">
                    {arr.map((item) => {
                        return (<div className="flex justify-start items-center  border hover:bg-indigo-100 hover:border-gray-400 transition border-transparent cursor-grab  rounded-lg p-2 w-[90%] h-fit" draggable={true} onDragStart={(event) => handleDragStart(event, item)} >
                            <img src={item.icon} alt="icon" className='w-5 h-5' />
                            <div className="flex flex-col ml-4">
                                <div className='font-semibold text-lg'>{item.name}</div>
                                <div className='font-light text-sm'>{item.description}</div>
                            </div>
                        </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}
export default Arr_map