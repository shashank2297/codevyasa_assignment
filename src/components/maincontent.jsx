import React from "react";
import Filters from "./filters.jsx";
import Header from "./header.jsx";
import Events from "./events.jsx";
import Searchbar from "./searchbar.jsx";

function MainContent({ showFilters, toggleFilters }) {

    return (
        <section>
            <Header />
            <div className="main-2" style={{ gridTemplateColumns: showFilters ? "75% 25%" : "" }}>
                <main>
                    <Events />
                    <Searchbar toggleFilters={toggleFilters} />
                </main>
                {showFilters && (
                    <Filters toggleFilters={toggleFilters} />
                )}
            </div>
        </section>
    );
}

export default MainContent;
