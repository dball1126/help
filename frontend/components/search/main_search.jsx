import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class MainSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {query: "", location: "", results: "", allBusinesses: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.state.allBusinesses = "true";
        
        this.props.searchBusinesses(this.state).then(() => this.props.history.push('/businesses'));
    }

    update(field){
        
       return  (e) => {
             this.setState({[field]: e.target.value}, () => this.searchdata())
       
        }
       
    }
    
    
    searchdata(){
        let allData = "";
        
         if (this.state.query.length >= 1){
            allData = this.props.searchBusinesses(this.state).then((data) => {
                let searchBusinesses;
                if(data.businesses){
                 searchBusinesses = Object.values(data.businesses)
                } else {
                    searchBusinesses = "";
                }
                
                this.setState({results: searchBusinesses});
               
                return searchBusinesses;
            })
            return allData;
         } else {
             
             this.setState({results: ""})
         }
    }

    

    searchResults(){
        if(this.state.results.length < 1){
            return ""
        } else {
            let businesses = this.state.results;
           const allbusinesses = businesses.map((business, i) => {
               let image = business.imageLinks[1];
               
                let businessName = business.name.split("").map((char, idx) => {
                    if(this.state.query.includes(char.toLowerCase())) return (<b key={idx} className="liveLetters">{char}</b>)
                    return char
                })
                return (
                    <div key={i} className="main-page-search-result">
                        <div className="main-business-search-img-box">
                            <Link to={`/businesses/${business.id}`}><img src={image} className="main-business-search-img"></img></Link>
                        </div>
                        <div className="main-business-search-name" >
                            <Link to={`/businesses/${business.id}`}>{businessName}</Link>
                        </div>
                    </div>
                )
            })
            return allbusinesses
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
                                        placeholder="search for businesses by name..."
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
                                        placeholder="Brooklyn, NY"
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
                <div className="main-searchData">
                
                {this.searchResults()}
                </div>
            </div>
    );
    }
}

export default withRouter(MainSearch);