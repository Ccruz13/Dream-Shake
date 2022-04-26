import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
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
        </div>
    )
}

export default Footer;