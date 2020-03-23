import React from 'react';

//CSS:
import "./search-box.css";

const SearchBox = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <input className='searcher' type='search' placeholder='search user' />
    </div>
  );
}

export default SearchBox;