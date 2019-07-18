import React from 'react';
import { withRouter } from 'react-router-dom';
import BusinessIndexContainer from '../business/business_index_container';

class MainSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {query: "", location: "", results: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentDidMount(){
        // this.props.fetchBusinesses();
      
    }

    handleSubmit(e){
        e.preventDefault();
        debugger
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
                
                let searchBusinesses = Object.values(data.businesses)
                
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
                let businessName = business.name.split("").map((char, idx) => {
                    if(this.state.query.includes(char.toLowerCase())) return (<b key={idx} className="liveLetters">{char}</b>)
                    return char
                })
                return (
                    <div key={i} className="main-page-search-result">
                        {businessName} 
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
                                        placeholder="restaurants, pizza, chinese..."
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
                <div className="searchData">
                
                {this.searchResults()}
                </div>
            </div>
    );
    }
}

export default withRouter(MainSearch);