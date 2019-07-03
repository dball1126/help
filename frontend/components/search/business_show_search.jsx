import React from 'react';
import BusinessMap from '../business_show/business_map';
import {withRouter} from 'react-router-dom';

class businessShowSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {query: "", location: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
            this.props.searchBusinesses(this.state).then(() => this.props.history.push('/businesses'));
        
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    render(){

       return (
        <div className="business-search-container">
            <form className="business-show-search" onSubmit={this.handleSubmit}>
                <div className="business-show-search-left">
                    <label htmlFor="" className="searchbar-left-label">
                        <div className="searchbar-left-inside">
                            <span className="find-searchbar-left">Find</span>
                            <span className="input-searchbar-left">
                                <input type="text"
                                    value={this.state.query}
                                    onChange={this.update('query')}
                                    placeholder="restaurants, pizza, chinese..."
                                    className="business-search" />
                            </span>
                        </div>
                    </label>
                </div>
                <div className="business-show-search-right">
                    <label htmlFor="" className="searchbar-right-label">
                        <div className="searchbar-right-inside">
                            <span className="near-searchbar-right">Near</span>
                            <span className="input-searchbar-right">
                                <input type="text"
                                    value={this.state.location}
                                    onChange={this.update('location')}
                                    placeholder="Brooklyn, NY"
                                    className="location-search" />
                            </span>
                        </div>
                    </label>
                </div>
                <div className="business-show-search-button">
                    <button type="submit" className="search-button-business-show">
                        <div className="business-show-search-image"></div>
                    </button>
                </div>
            </form>
        </div>
    );
    }
}

export default withRouter(businessShowSearch);