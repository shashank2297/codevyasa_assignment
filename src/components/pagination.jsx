import React from "react"

function Pagination({ currpage, prevpage, nexpage, changecpage, numbers }) {

    return (
        <div>
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link" onClick={prevpage}>&laquo;</button>
                </li>
                {numbers.map((n) => (
                    <li key={n} className={`page-item ${currpage === n ? 'active' : ''}`}>
                        <button href="#" className="page-link" onClick={() => changecpage(n)}>{n}</button>
                    </li>
                ))}
                <li className="page-item">
                    <button className="page-link" onClick={nexpage}>&raquo;</button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination