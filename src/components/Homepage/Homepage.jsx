import { Link } from 'react-router-dom';
import './main.css';

export function Homepage() {
    return (<>
     <main style={{ display:'flex' }}>
       <section className='top-banner'>
            <div>
                <div>
                    <h1>Little Lemon</h1><h2>Chicago</h2>
                    <p>We are a family owned Meditarian restaurant, focused on traditional recipes with modern twist.</p>
                    <Link className='table-reserve-btn' to="/booking">Reserve A Table</Link>
                </div>
                <img className='front-image' alt='little lemon food' width="350" src="/top-left-image.png" />
            </div>
        </section>
    </main>
    <section style={{minHeight:'17vh'}}>

    </section>
</>);
}