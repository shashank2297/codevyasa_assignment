import React from "react"
import { FaRegBell } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Img from "../images/1535347090952.jpg"

function Header() {

    return (
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
    )
}

export default Header