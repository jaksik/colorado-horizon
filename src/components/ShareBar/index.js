import React, { useState, useEffect } from "react"

import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    PinterestShareButton,
    PinterestIcon,
    TwitterIcon,
    TwitterShareButton,
} from "react-share";

export default function ShareBar() {

    const [currentLocation, setCurrentLocation] = useState('');


    useEffect(() => {
        const x = window.location.href;
        setCurrentLocation(x);
    })

    return (
        <div className="d-flex justify-content-center" >
            <FacebookShareButton
                className="mr-2 network__share-button"
                url={currentLocation}
            >
                <FacebookIcon
                    size={32}
                />
            </FacebookShareButton>
            <LinkedinShareButton
                className="mr-2 network__share-button"
                url={currentLocation}
            >
                <LinkedinIcon
                    size={32}
                />
            </LinkedinShareButton>

            <TwitterShareButton
                className="mr-2 network__share-button"
                url={currentLocation}
            >
                <TwitterIcon
                    size={32}
                />
            </TwitterShareButton>

            <PinterestShareButton
                className="mr-2 network__share-button"
                url={currentLocation}
            >
                <PinterestIcon
                    size={32}
                />
            </PinterestShareButton>

            <EmailShareButton
                className="mr-2 network__share-button"
                url={currentLocation}
            >
                <EmailIcon
                    size={32}
                />
            </EmailShareButton>
        </div>
    )
}