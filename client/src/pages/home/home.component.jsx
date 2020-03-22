import React from 'react';
import {Link} from 'react-router-dom';

//CSS:
import './home.css';


const Home = () => {
  return (
    <div>
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Link to='/' style={{ textDecoration: 'none' }}>
            <p className='signout f3 pa3 pointer'>Sign Out</p>
        </Link>
        </nav>
        <div className='userInfo'>
        <p className='paragraph f3 pa1'>UserName</p>
        <p className='paragraph f3 pa1'>ClassName</p>
        <p className='paragraph lvl f3 pa1'>Lvl: 1</p>
        <input
        className='searcher'
        type='search'
        placeholder='search user'
      />
        </div>
        <div className='center'>
                <div className='center'>
                <button className='fight-btn f3 link pa3 pointer'>FIGHT</button>
                </div>
            </div>
    </div>
  );
}

export default Home;