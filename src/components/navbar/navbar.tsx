import React from 'react'
import style from'./navbar.module.scss'
import { Link } from "react-router-dom";
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <div className={style.navbar}>
            <Link to="/">  Home  </Link>
            <Link to="first">  Component  </Link>
            <Link to="example">  Component2  </Link>
        </div>
    )
}

export default Navbar
