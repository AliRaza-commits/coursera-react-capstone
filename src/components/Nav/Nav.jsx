import { Link } from 'react-router-dom';
import './nav.css';

const nav_menu = [
    {name: 'Home', link: '/'},
    {name: 'Reserve A Table', link:'/booking'},
    {name: 'Contact Us', link:'/'},
    {name: 'Location', link:'/'}
]
const navLinks = () => {
    return (
    <ul>
        { nav_menu.map((value,index) => (
            <Link key={index} style={{ textDecoration: 'none', color:'white' }} to={value.link}>{value.name}</Link>
        ))}
    </ul>
);
}

export function Nav() {
    return (<nav>{navLinks()}</nav>);
}