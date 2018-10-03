import React, { Component } from "react";
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
    render() {
        return (
            // <Provider store={store}>
            //     <Router>
            //             <div>
            //             <Route exact path="/" component={LandingPage} />
            //             <Switch>
            //                 <PrivateRoute exact path="/dashboard" component={Dashboard} />
            //             </Switch>
            //             </div>
            //     </Router>
            // </Provider>
            <div>
             <h1>ReactAPp</h1>
            </div>
        );
    }
}

export default App;
