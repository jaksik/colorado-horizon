import React from 'react'

import facebook from './icons/facebook.svg'
import instagram from './icons/instagram.svg'
import linkedin from './icons/linkedin.svg'
import pinterest from './icons/pinterest.svg'
import twitter from './icons/twitter.svg'
import youtube from './icons/youtube.svg'

const Connect = () => (
    <div className="d-flex align-items-center justify-content-center justify-md-content-end">
        <a href="https://www.facebook.com/connorjaksik" target="_blank" rel="noopener noreferrer">
        <img className="mr-3" width="20" src={facebook}/>
        </a>
        <a href="https://www.instagram.com/connorjaksik/" target="_blank" rel="noopener noreferrer">
        <img className="mr-3" width="20" src={instagram}/>
        </a>
        {/* <a href="">
        <img className="mr-3" width="20" src={linkedin}/>
        </a>
        <a href="">
        <img className="mr-3" width="20" src={pinterest}/>
        </a>
        <a href="">
        <img className="mr-3" width="20" src={twitter}/>
        </a>
        <a href="">
         <img className=" width="20" src={youtube}/>
        </a> */}
    </div>
)

export default Connect