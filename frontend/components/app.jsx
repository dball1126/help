import React from 'react';
import { Route} from 'react-router-dom';
import LoginformContainer from '../components/session_form/login_form_container';
import SignUpformContainer from '../components/session_form/signup_form_container';
import { AuthRoute, Protectedroute } from '../util/route_util';
import Homepage from './greeting/homepage';
import Banner from './greeting/top_banner';
import BusinessShowContainer from './business_show/business_show_container';
import BusinessIndexContainer from './business/business_index_container';
import CreateReviewContainer from './review_form/create_review_container';
import EditReviewContainer from './review_form/edit_review_container';


const App = () => {
    return (
        <div>
             <Route exact path ='/' component={Banner} />
             <Route exact path ='/' component={Homepage} />
             <Route exact path ='/businesses' component={BusinessIndexContainer} />
             <Route exact path ='/businesses/:businessId' component={BusinessShowContainer}/>
             <Route exact path ='/businesses/:businessId/review' component={CreateReviewContainer}/>
             <Route exact path ='/businesses/:businessId/edit/:reviewId' component={EditReviewContainer}/>
             <AuthRoute exact path="/signup" component={SignUpformContainer} />
             <AuthRoute exact path="/login" component={LoginformContainer} />
        </div>
    )
}

export default App;


