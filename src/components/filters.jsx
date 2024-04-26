import React from "react"

function Filters({ toggleFilters }) {
    return (
        <section className="filters" id="filters-1">
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
                <option value="cat1">Category-1</option>
                <option value="cat2">Category-2</option>
                <option value="cat3">Category-3</option>
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
                <option value="team1">Team-1</option>
                <option value="team2">Team-2</option>
                <option value="team3">Team-3</option>
            </select>
            <button className="appandreset apply">Apply</button>
            <br />
            <button className="appandreset reset">Reset</button>
        </section>
    )
}

export default Filters