import React, { useState } from "react"
import data from "../data"

function Table() {

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
                    {records.map((item) => (
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
                    {numbers.map((n) => (
                        <li key={n} className={`page-item ${currpage === n ? 'active' : ''}`}>
                            <a href="#" className="page-link" onClick={() => changecpage(n)}>{n}</a>
                        </li>
                    ))}
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={nexpage}>&raquo;</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Table