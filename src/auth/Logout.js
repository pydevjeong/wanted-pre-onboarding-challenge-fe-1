import React from 'react';

const Logout = () => {
  const logoutHandler=()=>{
    localStorage.removeItem('token')
  }
  return (
    <div>
      <button onClick={logoutHandler}>로그아웃</button>
    </div>
  );
};

export default Logout;