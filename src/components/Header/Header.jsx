import { Link } from 'react-router-dom';
import './nav.css';
import { useState } from 'react';
import { nav_menu } from '../../utils/util';


const Navlinks = () => {
const [showNavItem, setShowNavItem] = useState(true);
const handleNavItem = () => {
    setShowNavItem((prevState) => !prevState);
}

return (
<header>
    <nav className='nav-bar'>
        <Link key="logo" style={{ textDecoration: 'none' }} to="/">
            <img  alt='Logo' src="/logo.jpg" width="150" height="50" />
        </Link>
    { showNavItem &&  <ul className='navitems'>
        {nav_menu.map((value,index) => (
            <li><Link key={index} style={{ textDecoration: 'none' }} to={value.link}>{value.name}</Link></li>
        ))}
    </ul> }
    </nav>
    <div onClick={handleNavItem} className='navicon'>
        {!showNavItem ? (<i class="fa fa-bars"></i>) : ((<i class="fa fa-close"></i>))}
    </div>
</header>
);
}

export function Header() {
    return (Navlinks());
}