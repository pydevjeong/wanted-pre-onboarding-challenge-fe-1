import React from 'react';

const Logout = () => {
  const logoutHandler=()=>{
    localStorage.removeItem('token')
  }
  return (
    <div>
      <button onClick={logoutHandler}>๋ก๊ทธ์์</button>
    </div>
  );
};

export default Logout;