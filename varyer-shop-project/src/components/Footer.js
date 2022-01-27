import React from 'react'

//Import css
import '../css/Footer.css'

const Footer = () => {
    return (
        <div class='footer-container'>
            <div class='social-media-container'>
                <a>INSTAGRAM</a>
                <a>SPOTIFY</a>
                <a>TWITTER</a>
                <a>INFO</a>
                <a>HEY@VARYER.COM</a>
            </div>
            <div class='webpage-switch-container'>
                <div class='circles-container'>
                    <div>
                        <span class="dot1"></span>
                        <p class='title-dot1'>Varyer</p>
                        <p class='subtitle-dot1'>YOU ARE HERE</p>
                    </div>
                    <div>
                        <span class="dot2"></span>
                        <p class='title-dot2'>Studio</p>
                        <p class='subtitle-dot2'>GO HERE</p>
                    </div>
                </div>
                <div>
                    <span class="square"></span>
                </div>
            </div>
            <div class='terms-container'>
                <div class='home-footer-container'>
                    <p>Object 1</p>
                </div>
                <div class='conditions-container'>
                    <a>2022 VARYER LLC</a>
                    <a>PRIVACY</a>
                    <a>SHIPPING</a>
                    <a>TERMS OF USE</a>
                    <a>RETURNS AND EXCHANGES</a>
                </div>
                <div class='flowers-container'>
                    <p>Object 1</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
