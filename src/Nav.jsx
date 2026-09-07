import logo from "./assets/logo.jpg"
import profile from "./assets/profile.jpg"
function Nav() {
    return (
        <nav className="flex flex-row h-20 w-full gap-5 items-center justify-between bg-white px-5">
            <div className="flex gap-5 items-center">
                <img src={logo} className="h-12 w-12" alt="logo" />
                <div className="font-bold flex items-center text-2xl">No Code Automation Platform</div>
            </div>
            <div className="flex justify-center items-center gap-10 border rounded-3xl px-5 py-2 bg-gray-100 border-gray-200 w-150 ">
                <div className="cursor-pointer  px-5 py-2 hover:text-blue-500  bg-white rounded-2xl">Home</div>
                <div className="cursor-pointer  px-5 py-2 hover:text-blue-500  bg-white rounded-2xl">My Automations</div>
                <div className="cursor-pointer  px-5 py-2 hover:text-blue-500  bg-white rounded-2xl">Templates</div>
            </div>
            <img src={profile} alt="profile" className="h-12 w-12  rounded-full cursor-pointer hover:scale-110" />
        </nav>
    )
}

export default Nav