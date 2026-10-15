import { Link } from "react-router-dom"

function Nav2({ nodes, edges }) {

    const save = async () => {
        const data = { nodes, edges };
        const response = await fetch("http://localhost:5000/create-automation",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
        const result = await response.json();
        console.log("Result:", result);
    }

    return (
        <nav className="h-20 bg-white w-full flex shrink-0 justify-between items-center p-5">
            <div className="flex gap-5 items-center">
                <Link to="\" className="text-gray-600  py-1 px-3 rounded-xl hover:bg-gray-100 transition font-semibold"> {'<-'} Back</Link>
                <div className="h-5 w-0 border border-gray-200"></div>
                <div className="font-bold py-1 px-2 rounded-xl hover:bg-gray-100 transition">Untitled Automation</div>
                <div className="border-2 border-green-200 rounded-2xl py-1 px-3 text-green-700 font-semibold bg-green-100 text-[80%]">DRAFT</div>
            </div>
            <div className="flex gap-5 items-center">
                <div className="h-5 w-0 border border-gray-200"></div>
                <div className="py-1 px-3 rounded-xl hover:bg-gray-100 transition border border-gray-300 cursor-pointer">Duplicate</div>
                <div className="py-1 px-3 rounded-xl hover:bg-gray-100 transition border border-gray-300 cursor-pointer" onClick={save}>Save</div>
                <div className="py-1 px-3 rounded-xl hover:bg-indigo-100 transition border border-gray-300 cursor-pointer">Preview</div>
                <div className="py-1 px-3 rounded-xl hover:bg-indigo-700 transition text-white font-semibold bg-indigo-600 cursor-pointer">Demo Run</div>
            </div>
        </nav>
    )
}

export default Nav2