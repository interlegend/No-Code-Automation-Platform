import SearchIcon from './assets/search-icon.png';
import { useState } from 'react'
function Searchbar({ onSearch, Search }) {

    return (
        <>
            <div className="flex border border-gray-300  rounded-2xl w-[80%] focus-within:border-violet-500 bg-white focus-within:shadow-md transition">
                <img src={SearchIcon} alt="search-icon" className="h-12 w-12" />
                <input placeholder="Search templates (e.g. FFCS, LMS, Attendance, Exam)" className="h-12 w-full outline-none" value={Search} onChange={(e) => onSearch(e.target.value)} />
            </div>
        </>
    )
}

export default Searchbar