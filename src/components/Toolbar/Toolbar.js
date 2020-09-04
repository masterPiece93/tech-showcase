import React from 'react'
import './Toolbar.css'

const toolbar = (props) => {
    return (
        <header className="toolbar">
            <nav className="toolbar_nav">
                <div></div>
                <div className="toolbar_logo">
                    <a href="">Ankit</a>
                </div>
                <div className="spacer"></div>
                <div className="toolbar_nav_items">
                    <ul>
                        <li><a href="">Javascript</a></li>
                        <li><a href="">Python</a></li>
                        <li><a href="">DS/Algo</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default toolbar;