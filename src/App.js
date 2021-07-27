// import logo from './logo.svg';
// import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { Security, SecureRoute, ImplicitCallback ,LoginCallback} from '@okta/okta-react';
// import SignInWidget from './components/auth/SignInWidget';
// import { useOktaAuth } from '@okta/okta-react';

// // import Home from './components/Firstpage';
// import Api from './components/Api';
// import Navbar from './components/layout/Navbar';
// import Home from './components/pages/Home';
// import Staff from './components/pages/Staff';
// import Login from './components/auth/Login';


// function onAuthRequired({history}){

//   history.push('/login');
// }

// // function App() {
// //   return (
// //      <Router>
// //        <Security
// //           issuer="dev-65749052.okta.com/oauth2/default"
// //           client_id="0oa1bx8zkvwkC9Xvm5d7"
// //           redirect_uri={window.location.origin + '/implicit/callback'}
// //           onAuthRequired={onAuthRequired}
// //         >
// //        <div className="App">
// //          <Navbar/>
// //       <Switch>
    
// //      {/* <Route exact path="/" component={Home} /> */}
// //         <Route path="/api" component={Api} />
// //         {/* <Route exact path="/" component={Navbar}/> */}
// //         <div className="container">
// //         <SecureRoute exact path="/staff" component={Staff}/>
// //         <Route
// //                 path="/login"
// //                 render={() => (
// //                   <Login baseUrl="https://dev-65749052.okta.com" />
// //                 )}
// //               />
// //               <Route path="/implicit/callback" component={LoginCallback} />
// //         <Route exact path="/home" component={Home}/>
// //         </div>
        
// //       </Switch>
// //       </div>
// //       </Security>
// //       </Router>
  
// //   );
// // }

// // export default App;


// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Security, SecureRoute, ImplicitCallback,LoginCallback } from '@okta/okta-react';

// import Navbar from './components/layout/Navbar';
// import Home from './components/pages/Home';
// import Staff from './components/pages/Staff';
// import Login from './components/auth/Login';
import Navbar from './components/layout/Navbar';

 import Staff from './components/pages/Staff';
 
// import AppWithRouterAccess from './components/auth/AppWithRouterAccess';


import './App.css';

import React from 'react';
import { Route, useHistory, Switch, BrowserRouter as Router,
     Link } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Api from './components/Api';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Protected from './components/auth/Protected';
import { oktaAuthConfig, oktaSignInConfig } from './components/auth/config';

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {
  const history = useHistory();

  const customAuthHandler = () => {
   history.push('/login');
  };
  
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <Router>
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
       <Navbar/>
      <Switch>
      <Route exact path="/api" component={Api} />
        <Route exact path='/home' exact={true} component={Home} />
        <SecureRoute exact path='/protected' component={Protected} />
        <Route exact path="/staff" component={Staff}/>
        <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
        <Route path='/login/callback' component={LoginCallback} />
      </Switch>
    </Security>
    </Router>
  );
};
export default AppWithRouterAccess;
