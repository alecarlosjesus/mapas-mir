import React from 'react'
import logoBase from '../../img/bg_section1_first_anniversary.jpg'
import './Home.css'
export default function Home() {




    return (
        <div>

            <h1 className="titLogo">
                Dampio FAKE
            </h1>

            <figure>
                <img src={logoBase} className="bg_section1_first_anniversary" alt="logo do mir" />
            </figure>
        </div>
    )
}
