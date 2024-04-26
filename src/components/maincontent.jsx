import React from "react";
import { IoFilterOutline } from "react-icons/io5";
import { FaRegBell, FaPlus } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiExportLight } from "react-icons/pi";
import Img from "../images/1535347090952.jpg"
import Filters from "./filters.jsx";
import Table from "./table.jsx";

function MainContent({ showFilters, toggleFilters }) {

    return (
        <section>
            <div className="productshdr-1">
                <h1>Products</h1>
                <div className="productshdr-2">
                    <span className="bell"><FaRegBell /><span className="dot">.</span></span>
                    <div className="productshdr-3">
                        <img src={Img} alt="personImage" />
                        <span className="name">Mathews Gill</span>
                        <span><MdOutlineKeyboardArrowDown /></span>
                    </div>
                </div>
            </div>
            <div className="main-2" style={{ gridTemplateColumns: showFilters ? "75% 25%" : "" }}>
                <main>
                    <div className="libar">
                        <ul>
                            <li>Paris Olympic- 2024</li>
                            <li>T20 World Cup- 2024</li>
                            <li>Manchestar United- 200</li>
                            <li>Mumbai City FC- 220</li>
                            <li>Motor Sports- 10</li>
                        </ul>
                    </div>
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
                </main>
                {showFilters && (
                    <Filters toggleFilters={toggleFilters} />
                )}
            </div>
        </section>
    );
}

export default MainContent;
