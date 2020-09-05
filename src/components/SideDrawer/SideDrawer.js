import React from 'react';
import './SideDrawer.css'

const sideDrawer = props => {

    let side_drawer_classes = props.sideDrawer ? "side-drawer open" : "side-drawer"
    return (
        <nav className={side_drawer_classes}>
            <ul>
                <li><a href="/">Lectures</a></li>
                <li><a href="/">Notes</a></li>
                <li><a href="/">diy projects</a></li>
            </ul>
        </nav>
    )
}

export default sideDrawer;