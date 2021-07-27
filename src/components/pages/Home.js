import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return null;

  const login = async () => history.push('/login');
  
  const logout = async () => oktaAuth.signOut();

  const mainContent = authState.isAuthenticated ? 
    // <button onClick={logout}>Logout</button> :
    // <button onClick={login}>Login</button>;
    <div> 
        <p className="lead">You have entered the staff portal,<Link to="/staff">click here</Link></p>
        <button className="btn btn-light btn-lg" onClick={logout}>Logout</button>
    </div> : 
    <div>
        <p className="lead" style={{ textAlign:"center"}}>If you are still staff.Please get your credential from supervisor</p>
       <div style={{ textAlign:"center"}}> <button  className="btn btn-dark btn-lg"   onClick={login}>Login</button></div>
        
    </div> 
    

  return (
    <div className="jumbotron">
        <h1 className="display-4" style={{ textAlign:"center"}}>Staff Portal</h1>
      {mainContent}
    </div>
  );
};
export default Home;
