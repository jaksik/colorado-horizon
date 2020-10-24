import React, { useState, useEffect } from "react"

import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    InstapaperShareButton,
    InstapaperIcon,
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
                quote={"hello"}
            >
                <FacebookIcon
                    size={32}
                />
            </FacebookShareButton>
            <LinkedinShareButton
                className="mr-2 network__share-button"
                url={currentLocation}
                quote={"hello"}
            >
                <LinkedinIcon
                    size={32}
                />
            </LinkedinShareButton>

            <TwitterShareButton
                className="mr-2 network__share-button"
                url={currentLocation}
                quote={"hello"}
            >
                <TwitterIcon
                    size={32}
                />
            </TwitterShareButton>

            <PinterestShareButton
                className="mr-2 network__share-button"
                url={currentLocation}
                quote={"hello"}
            >
                <PinterestIcon
                    size={32}
                />
            </PinterestShareButton>

            <EmailShareButton
                className="mr-2 network__share-button"
                url={currentLocation}
                quote={"hello"}
            >
                <EmailIcon
                    size={32}
                />
            </EmailShareButton>
        </div>
    )
}