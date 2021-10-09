import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav>

                <ul>
                    <li> <Link to="/" id="logo"><strong>SKELLY</strong></Link></li>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Shop</Link></li>
                    <li><Link to="/testimonial">Testimonial</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><img src="./logo/search.png" alt="" /></li>
                    <li><img src="./logo/user.png" alt="" /></li>
                    <li><img src="./logo/kart.png" alt="" /></li>


                </ul>
            </nav>

        </div>
    )
}

export default Navbar
