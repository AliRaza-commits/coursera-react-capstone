import { nav_menu } from '../../utils/util';
import { Link } from 'react-router-dom';
import './footer.css';
import footerimage from './../../assets/images/footer.png';

export function Footer() {
    return (
    <footer>
        <div className='container grid'>
        <img className='footer-img' src={footerimage} />
        <nav>
            <h4>Site Map</h4>
            <ul>
            {nav_menu.map((value,index) => (
                <li><Link key={index} style={{ textDecoration: 'none' }} to={value.link}>{value.name}</Link></li>
            ))}
            </ul>
        </nav>
        </div>
    </footer>
    );
}