import React from 'react';
import { Route} from 'react-router-dom';
import LoginformContainer from '../components/session_form/login_form_container';
import SignUpformContainer from '../components/session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomepageContainer from './greeting/homepage_container';
import BusinessShowContainer from './business_show/business_show_container';
import BusinessIndexContainer from './business/business_index_container';
import CreateReviewContainer from './review_form/create_review_container';
import EditReviewContainer from './review_form/edit_review_container';
import SearchContainer from './search/search_container';


const App = () => {
   
    return (
       
        
        <div>
             <Route exact path ='/' component={HomepageContainer} />
                <Route exact path='/businesses' component={BusinessIndexContainer}/>
             <Route exact path ='/businesses/:businessId' component={BusinessShowContainer}/>
             <ProtectedRoute exact path ='/businesses/:businessId/review' component={CreateReviewContainer}/>
             <ProtectedRoute exact path ='/businesses/:businessId/edit/:reviewId' component={EditReviewContainer}/>
             <Route path ='/businesses/search' component={SearchContainer}/>
             <Route path = '/null'/>
             <AuthRoute exact path="/signup" component={SignUpformContainer} />
             <AuthRoute exact path="/login" component={LoginformContainer} />
        </div>
       
    )
}

export default App;


