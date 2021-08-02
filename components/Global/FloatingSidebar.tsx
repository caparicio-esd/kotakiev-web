import { FacebookLogo, InstagramLogo } from 'phosphor-react'
import React from 'react'

const FloatingSidebar = () => {
    return (
        <div className="floating_sidebar">
            <div className="floating_sidebar_links">
                <div className="link">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FacebookLogo size={24} weight="bold" />
                    </a>
                </div>
                <div className="link">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <InstagramLogo size={24} weight="bold" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FloatingSidebar
