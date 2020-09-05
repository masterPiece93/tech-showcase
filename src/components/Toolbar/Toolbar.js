import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from './../SideDrawer/DrawerToggleButton'

const toolbar = (props) => {
    return (
        <header className="toolbar">
            <nav className="toolbar_nav">
                <div style={{width: "2%",margin: "1em",padding: "1px",height: "40%"}}>
                    <DrawerToggleButton click={props.hamButtonClick}/>
                </div>
                <div className="toolbar_logo">
                    <a href="">Ankit Learning Portal</a>
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