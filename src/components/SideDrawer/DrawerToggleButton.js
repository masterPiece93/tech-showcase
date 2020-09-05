import React from 'react'
import './DrawerToggleButton.css'

const drawerToggleButton = props => {
    return (
        <div className="ak_button" onClick={props.click}>
            {/* button component for drawer */}
            <div className="ak_button_icon_line"></div>
            <div className="ak_button_icon_line"></div>
            <div className="ak_button_icon_line"></div>
        </div>
    )
}

export default drawerToggleButton;