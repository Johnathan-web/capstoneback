import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentials = { email, password };
      const response= await fetch("/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email:credentials.email, password:credentials.password})
      })
      const result= await response.json()
      console.log(result)
      navigate('/');
    
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }
    localStorage.setItem("token", data.token); // Save token
            localStorage.setItem("user", JSON.stringify(data.user)); // Save user info
            alert("Login successful!");


    } catch (error) {
      setError('Invalid login, please try again!');
      console.error('Invalid login, please try again!', error);
    }
  };

  return (
    <>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className="contact-container" style={{ padding: "40px",   borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", width: "100vw",}}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
         Submit
        </button>
      </form>
    </>
  );
};

export default Login;