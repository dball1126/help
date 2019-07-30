import GreetingContainer from './greeting_container';
import React from 'react';
import {Link, Redirect} from 'react-router-dom';
// import MainSearch from '../search/main_search';
import SearchContainer from '../search/search_container';
class Homepage extends React.Component {
    constructor(props) {
        super(props);
        

    }
   componentDidMount(){
       
    
       this.props.fetchCategories();
       this.props.startPageBusinesses();
   }
   
  
   
    render(){
        
        let businesses = this.props.businesses || [];

        const startBusinesses = () => {
           let counter = 0
            if (businesses < 1) {
                
                return ""
            } else {
                
                if (counter === 0){
                    counter++;
                return (
                    businesses.map((business, i) => {
                        const stars = () => {
                            let starColorTop;
                            let starCounter = business.average_rating;
                            return (
                                <div className="star-review-item-rating" >
                                    {[...Array(5)].map((ele, i) => {
                                        starCounter -= 1;
                                        if (starCounter < 0) starColorTop = "stary";
                                        return (
                                            <div className="star-box" key={i}>
                                                <span className="fa fa-star" id={starColorTop} ></span>
                                            </div>
                                        )
                                    })}
                                </div>
                            )

                        }
                        // let image = business.imageLinks[Math.ceil(Math.random() * 2)];
                            let image = business.imageLinks[1];
                        return (
                            <div className="start-page-business" key={i}>
                                <div className="start-business-pic">
                                    <Link to={`/businesses/${business.id}`}><img src={image} className="start-page-index-image"></img></Link>
                                </div>
                                <div className="start-page-business-name">
                                    <Link to={`/businesses/${business.id}`} className="business-index-show-link">{business.name}</Link>
                                </div>
                                <div className="start-page-star-box">
                                    {stars()}<span className="span-reviews-count">{business.reviews_count} Reviews</span>
                                </div>
                            </div>
                        )
                    })
                )}
            }
        }
    return (
        <div>
            <div className="homepage-main-container">
                <div className="homepage-main-inner-container">
                    <div className="homepage-main-nav-container">
                        <nav className="homepage-nav-reviews">
                            <ul className="ul-nav-reviews">
                                <li className="nav-review-link" onClick={() => this.props.fetchBusinesses().then(() => this.props.history.push({ pathname: '/businesses', prev: 'homepage' }))} ><div className="start-page-reivew-link" >Write a Review</div></li>
                                {/* <li className="nav-events-link">Events</li>
                                <li className="nav-talk-link">Talk</li> */}
                            </ul>
                        </nav>
                        <nav className="home-page-nav-session">
                            <GreetingContainer path="homepage" />
                        </nav>
                    </div>
                    <div className="homepage-main-inner-inner-container">
                        <div className="main-logo-containter">
                            <div className="main-logo">
                                <span className="yap-main-logo">yap</span>
                            </div>
                        </div>
                        <SearchContainer />
                            <nav className="main-nav-categories">
                                <ul className="ul-nav-categories" >
                                    <li className="cooling-services">
                                        Italian
                                    </li>
                                    <li className="restaurants">
                                        Chinese
                                    </li>
                                    <li className="home-services">
                                        Sushi
                                    </li>
                                    <li className="Delivery">
                                        Burgers
                                    </li>
                                </ul>
                            <div className="main-header-credits">
                                <div className="business-credit">Pancake Man</div>
                                <div className="name-credit">Photo by Larry J</div>
                            </div>
                            </nav>
                    </div>
                </div>
            </div>
            <div className="popular-businesses">
                <div className="popular-businesses-h3">
                    <p>Popular Businesses</p>
                </div>
                <div className="footer-content-wrapper">
                    <div className="start-business-box">
                        {startBusinesses()}
                    </div>
                </div>
                
            </div>

            <div className="homepage-main-footer-container">
                <div className="homepage-footer-inner-container">
                    <div className="main-page-logo-box">
                        <div className="main-page-img-box">
                            <a href="https://www.linkedin.com/in/daniel-ball-1502b062/"><img src="https://yap-dev.s3.amazonaws.com/Linkedin-logo.png"/></a>
                        </div>
                        <div className="main-page-img-box">
                            <a href="https://github.com/dball1126"><img src="https://yap-dev.s3.amazonaws.com/GitHub-logo-32px.png" /></a>
                        </div>
                        <div className="main-page-img-box">
                            <a href="https://angel.co/daniel-ball-6"><img src="https://yap-dev.s3.amazonaws.com/AngelList_Black_Victory_Hand.png" /></a>
                        </div>
                    </div>
                    <div className="footer-img-wrapper">
                        <div className="footer-img"></div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
}


export default Homepage;