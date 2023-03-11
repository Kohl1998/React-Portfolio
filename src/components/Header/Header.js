import "./Header.css"
import React from "react";

function Header () {
    return (
        <div>
            <nav>
                <ul>
                    {/* renders correct page based on user click */}
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </ul>
            </nav>
        </div>
    )
}

export default Header