import React from 'react';

const banner = () => {
    
    return (
    <div className="main-header">
        <div className="main-header-container">
            <a href="https://help10.herokuapp.com/#/" className="main-header-link">
                <span className="main-header-image">
                    <img src="/assets/suitcase.png" width="18" height="18"></img>
                </span>
                <span className="main-header-slogan">
                    Go to Help for Business Owners
                </span>
            </a>
        </div>
    </div>
    )
}

export default banner;