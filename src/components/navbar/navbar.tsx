import React from 'react'
import style from'./navbar.module.scss'
import { Link } from "react-router-dom";
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <div className={style.navbar}>
                <Link className={style.link}to={'/'}>Home</Link>
                <Link className={style.link}to={'first'}>Projects</Link>
               <Link className={style.link}to={'placeholder'}>Skills</Link>
               <Link className={style.link}to={'placeholder'}>PlaceHolder</Link>
        </div>
    )
}

export default Navbar
