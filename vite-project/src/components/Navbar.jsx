import React from 'react';

export function NavBar() {
    return (
        <nav className='row jc-sb ai-cen navbar'>
            <div className="logo">
                <img src='./src/assets/icons-apple_logo-purple.svg' />
            </div>

            <ul className="row gap-half">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li><a href="/">Contact</a></li>                    
            </ul>
        </nav>
    )
}