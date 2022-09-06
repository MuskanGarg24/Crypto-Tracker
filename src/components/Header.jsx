import React from "react";
import "../global.css"

function Header() {
    return (
        <div className="jumbotron head">
            <div className="container-fluid">
                <h1 className="headName">Crypto Tracker</h1>
                <p className="headContent">Cryptocurrency Prices By Market Cap</p>
            </div>
        </div>
    )
}


export default Header;