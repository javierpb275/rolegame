import React from 'react';

//CSS:
import "./user-info.css";

const UserInfo = (name, class_type_name, level) => {
  return (
    <div>
        <div className='userInfo'>
        <div className='paragraph f3 pa1'>
        {`${name}`}
        </div>
        <div className='paragraph f3 pa1'>
        {`${class_type_name}`}
          </div>
        <div className='paragraph lvl f3 pa1'>
        {`lvl: ${level}`}
          </div>
        </div>
    </div>
  );
}

export default UserInfo;