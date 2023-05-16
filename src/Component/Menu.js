import React from 'react'
import Logo from "../assets/images/logo.svg";
import { HiShoppingCart } from "react-icons/hi";

const Menu = () => {
    return (
        <div className='container'>
            <div className="menu-top d-flex align-items-center justify-content-between">
                <a href="/" className='logo'>
                    <img src={Logo} alt="logo" width="160"/>
                </a>
                <div className='text-uppercase size-2x menu-name'>Foodnoop</div>
                <span><HiShoppingCart className='size-2x'/></span>
            </div>
        </div>
    )
}

export default Menu;