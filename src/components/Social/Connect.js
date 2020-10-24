import React from 'react'

import facebook from './icons/facebook.svg'
import instagram from './icons/instagram.svg'
import linkedin from './icons/linkedin.svg'
import pinterest from './icons/pinterest.svg'
import twitter from './icons/twitter.svg'
import youtube from './icons/youtube.svg'

const Connect = () => (
    <div className="d-flex align-items-center m-3 justify-content-center justify-md-content-end">
        <img className="mb-0 mr-3" width="25" src={facebook}/>
        <img className="mb-0 mr-3" width="25" src={instagram}/>
        <img className="mb-0 mr-3" width="25" src={linkedin}/>
        <img className="mb-0 mr-3" width="25" src={pinterest}/>
        <img className="mb-0 mr-3" width="25" src={twitter}/>
        <img className="mb-0" width="25" src={youtube}/>

    </div>
)

export default Connect