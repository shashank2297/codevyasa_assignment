import React from "react";
import { GrBook } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { BsGraphDownArrow } from "react-icons/bs";
import { HiOutlineArrowSmRight } from "react-icons/hi";

function Sidebar() {
    return (
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
    );
}

export default Sidebar;
