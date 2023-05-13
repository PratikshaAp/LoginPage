import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLogin(event) {
    event.preventDefault();
    // Here you can validate the username and password
    setIsLoggedIn(true);
  }

  if (isLoggedIn) {
    return (
      <div>
       <h1><button>ADD NOTES</button></h1>
        {/* Here you can add your dashboard content */}
      </div>
    );
  }

  return (
    <>
    <div className='container-fluid bg-primary'>
      <div className='row'>
      <div className='col-6'>
      <img src='./images.jpg'alt='img h-50'style={{borderRadius:"10%",height:"500px",marginTop:"100px"}}></img>
    </div>


  <div className='col-6'>
    <form onSubmit={handleLogin}>
      <h1 style={{color: "red",marginLeft:"30%",marginTop:"100px"}}>Login Page</h1>
      <label style={{color: "red",marginLeft:"30%",marginTop:"50px"}}>
       <h5>Username:</h5>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      
      <label style={{color: "red",marginLeft:"30%",marginTop:"40px"}}>
        <h5>Password:</h5>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit"style={{color: "red",marginLeft:"40%",marginTop:"40px",borderRadius:"10px",marginBottom:"300px"}}>Login</button>
    </form>
    </div>
  </div>
</div>
    </>
  );
}

export default LoginPage;
