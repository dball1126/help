import React from 'react';
import { withRouter } from 'react-router-dom';

class MainSearch extends React.Component{

    render(){
    return (
            <div className="main-search-form">
                <form method="get" className="main-business-search">
                    <div className="searchbar-left">
                        <label htmlFor="" className="searchbar-left-label">
                            <div className="searchbar-left-inside">
                                <span className="find-searchbar-left">Find</span>
                                <span className="input-searchbar-left">
                                    <input type="text"
                                        placeholder="ac repair, burgers, bars, spas..."
                                        className="business-search" />
                                </span>
                            </div>
                        </label>
                    </div>
                    <div className="searchbar-right">
                        <label htmlFor="" className="searchbar-right-label">
                            <div className="searchbar-right-inside">
                                <span className="near-searchbar-right">Near</span>
                                <span className="input-searchbar-right">
                                    <input type="text"
                                        placeholder="Manhattan, NY"
                                        className="location-search" />
                                </span>
                            </div>
                        </label>
                    </div>
                    <div className="main-search-button">
                        <button type="submit" className="search-button">
                            <div className="search-image"></div>
                        </button>
                    </div>
                </form>
            </div>
    );
    }
}

export default withRouter(MainSearch);