import React, { useState } from "react"
import { GrBook } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { BsGraphDownArrow } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { IoFilterOutline } from "react-icons/io5";
import { PiExportLight } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import data from "../data.js"

function Dashboard() {

    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);

    };

    let [currpage, setcurrpage] = useState(1)
    let recperpage = 10
    let lastindex = currpage * recperpage
    let firstindex = lastindex - recperpage
    let records = data.slice(firstindex, lastindex)
    let npages = Math.ceil(data.length / recperpage)

    let startpg = currpage - 2
    if (startpg < 1) startpg = 1
    let endpg = startpg + 4
    if (endpg > npages) {
        endpg = npages
        startpg = endpg - 4
        if (startpg < 1) startpg = 1
    }

    const numbers = []
    for (let i = startpg; i <= endpg; i++) {
        numbers.push(i)
    }

    function prevpage() {
        if (currpage !== 1) {
            setcurrpage(currpage - 1)
        }
    }

    function changecpage(id) {
        setcurrpage(id)
    }

    function nexpage() {
        if (currpage !== npages) {
            setcurrpage(currpage + 1)
        }
    }

    return (
        <>
            <div className="main">
                <section className="sidebar">
                    <p>logo</p>
                    <div className="sicons">
                        <span><GrBook /></span>
                        <span><MdOutlineSpaceDashboard /></span>
                        <span><RiPagesLine /></span>
                        <span><BsGraphDownArrow /></span>
                    </div>
                    <span className="arrowright"><HiOutlineArrowSmRight size={30} /></span>
                </section>
                <section className="dashboard">
                    <div className="productshdr-1">
                        <h1>Products</h1>
                        <div className="productshdr-2">
                            <span className="bell"><FaRegBell /><span className="dot">.</span></span>
                            <div className="productshdr-3">
                                <span className="person"><IoPersonCircleOutline /></span>
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
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" /></th>
                                                <th>Sr. No.</th>
                                                <th>Heading 1</th>
                                                <th>Heading 2</th>
                                                <th>Heading 3</th>
                                                <th>Heading 4</th>
                                                <th>Heading 5</th>
                                                <th>Heading 6</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {records.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td><input type="checkbox" /></td>
                                                    <td>{item.id}</td>
                                                    <td>{item.heading}</td>
                                                    <td>{item.heading}</td>
                                                    <td>{item.heading}</td>
                                                    <td>{item.heading}</td>
                                                    <td>{item.heading}</td>
                                                    <td>{item.heading}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div>
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a href="#" className="page-link" onClick={prevpage}>&laquo;</a>
                                            </li>
                                            {
                                                numbers.map((n, i) => (
                                                    <li className={`page-item ${currpage === n ? 'active' : ''}`}>
                                                        <a href="#" className="page-link" onClick={() => changecpage(n)}>{n}</a>
                                                    </li>
                                                ))
                                            }
                                            <li className="page-item">
                                                <a href="#" className="page-link" onClick={nexpage}>&raquo;</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </main>
                        {showFilters && (<section className="filters" id="filters-1">
                            <div className="filterssec">
                                <h2>Filters</h2>
                                <span className="close" onClick={toggleFilters}>X</span>
                            </div>
                            <hr />
                            <p>Product Name</p>
                            <input type="text" placeholder="Text Product Name" />
                            <br />
                            <p>Category</p>
                            <select name="category" id="category">
                                <option value="cat1">cat1</option>
                                <option value="cat2">cat2</option>
                                <option value="cat3">cat2</option>
                            </select>
                            <br />
                            <p>Event name</p>
                            <input type="text" placeholder="Event Name" />
                            <br />
                            <p>Match Name</p>
                            <input type="text" placeholder="Text Match Name" />
                            <br />
                            <p>Team</p>
                            <select name="team" id="team">
                                <option value="team1">team1</option>
                                <option value="team2">team2</option>
                                <option value="team3">team3</option>
                            </select>
                            <button className="appandreset apply">Apply</button>
                            <br />
                            <button className="appandreset reset">Reset</button>
                        </section>
                        )}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Dashboard;