import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
  
    if (username === 'job' && password === '1234') {
      setIsLoggedIn(true);
      navigate('/add'); 

    } else if (username === 'course' && password === '1234') {
      setIsLoggedIn(true);
      navigate('/addCourse'); 

    }
    else {
      alert('Invalid username or password');
    }
  };

  if (isLoggedIn) {
    return <div>You are logged in!</div>;
  }

  return (
    <div className="col-md-8 mt-4 mx-auto">
<h1 className="h3 mb-3 font-weight-normal">Login</h1>
<form className="needs-validation" noValidate>
  
<div className="form-group" style={{marginBottom: '10px'}}>
    <label style={{marginBottom: '5px'}} >UserName</label>
    <input type="text" className="form-control"  aria-describedby="emailHelp" value={username} onChange={(e) => setUsername(e.target.value)}/>
</div>


<div className="form-group" style={{marginBottom: '10px'}}>
    <label style={{marginBottom: '5px'}}>Password</label>
    <input type="password" className="form-control" aria-describedby="numberHelp" value={password} onChange={(e) => setPassword(e.target.value)} />
</div>

<button className="btn btn-primary" type="submit" style={{marginTop: '15px'}} onClick={handleLogin}><i className="far fa-check-square"></i>
&nbsp; Login
</button>

</form>
</div>
    
  );
}

export default Login;
