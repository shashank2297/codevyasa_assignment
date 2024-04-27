import Table from "./table"
import { IoFilterOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiExportLight } from "react-icons/pi";

function Searchbar({ toggleFilters }){
    
    return(
        <div className="main-3">
        <p id="search">Search</p>
        <div className="searchbar">
            <div className="searchbar-1">
                <input type="text" placeholder="Search" />
                <span id="searchicon"><CiSearch size={22} /></span>
            </div>
            <div className="btns">
                <button className="btn btnadd"><FaPlus size={14} /> Add Products</button>
                <button onClick={toggleFilters} className="btn btnfilter"><IoFilterOutline /> Filters</button>
                <button className="btn"><PiExportLight /> Export</button>
            </div>
        </div>
        <Table />
    </div>
    )
}

export default Searchbar