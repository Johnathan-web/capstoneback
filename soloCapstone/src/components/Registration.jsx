// import React, { useState } from 'react';




// const Registration = () => {
  
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');


  
//   const handleSubmit = async(e,email,lastname,firstname,password) => {
//     e.preventDefault();
//     try {
//         const addUser = await fetch("http://localhost.com:3000/api/register",{
//             method:'POST',
//             headers: {
//                 "Content-Type":"application/json"
//             },
//             body: JSON.stringify({email,lastname,firstname,password})
//         });
//         console.log(addUser)
//     } catch (error) {
//       setError('Registration failed, please try again!');
//       console.error('Registration failed, please try again!', error);
//     }
//   };
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    
    try {
      const credentials = { email, password };
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      });
      
      const result = await response.json();
      console.log(result);
      navigate('/login');
    } catch (error) {
      setError('Registration failed, please try again!');
      console.error('Registration failed, please try again!', error);
    }
  };

  return (
    <>
    <h2>Register</h2>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <form onSubmit={handleSubmit} className="contact-container" style={{ padding: "40px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", width: "100vw" }}>
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
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  </>
);
};

export default Registration;