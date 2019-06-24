import React from 'react';
import { withRouter } from 'react-router-dom';

class MainSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {query: "", location: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
     
    }

    componentDidMount(){
        // this.props.fetchBusinesses();
      
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
            <div className="main-search-form">
                <form className="main-business-search" onSubmit={this.handleSubmit}>
                    <div className="searchbar-left">
                        <label htmlFor="" className="searchbar-left-label">
                            <div className="searchbar-left-inside">
                                <span className="find-searchbar-left">Find</span>
                                <span className="input-searchbar-left">
                                    <input type="text"
                                        value={this.state.query}
                                        onChange={this.update('query')}
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
                                    value={this.state.location}
                                    onChange={this.update('location')}
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