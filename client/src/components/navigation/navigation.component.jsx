import React from 'react';

//CSS:
import './navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
        if (isSignedIn) {
            return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signout')} className='signout f3 pa3 pointer'>Sign Out</p>
        </nav>
        );
        } else {
            return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className="signin f3 pa3 pointer">Sign In</p>
            <p onClick={() => onRouteChange('register')} className="register f3 pa3 pointer">Register</p> 
        </nav>
        );
    }
}

export default Navigation;