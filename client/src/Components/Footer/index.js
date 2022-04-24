import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <section className='footer'>
            <div className='footer-wrap'>
                <div className='footer-logo'>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                <div style={{ color: 'white' }}>
                    <b>Dream Shake</b>
                </div>
                </Link>
                </div>
                <small className='website-rights'>Dream Shake © 2022</small>
            </div>
        </section>
    )
}

export default Footer;