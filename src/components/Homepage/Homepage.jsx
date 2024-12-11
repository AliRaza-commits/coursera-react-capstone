import { Link } from 'react-router-dom';
import './main.css';

export function Homepage() {
    return (<>
     <main style={{ display:'flex' }}>
       <section>
            <div>
                <h1>Little Lemon</h1><h2>Chicago</h2>
                <p>We are a family owned Meditarian restaurant, focused on traditional recipes with modern twist.</p>
                <Link style={{ background: '#F4CE14', color:'black', textDecoration: 'none', padding: '2px', borderRadius: '4px'}} to="/booking">Reserve A Table</Link>
            </div>
            <div><img alt='little lemon food' width="350" src="/top-left-image.png" /></div>
        </section>
    </main>
    <section style={{minHeight:'17vh'}}>

    </section>
</>);
}