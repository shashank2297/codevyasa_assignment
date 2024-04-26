import React, { useState } from "react";
import Sidebar from "./sidebar";
import MainContent from "./maincontent";

function Dashboard() {
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div className="main">
            <Sidebar />
            <MainContent showFilters={showFilters} toggleFilters={toggleFilters} />
        </div>
    );
}


export default Dashboard;
