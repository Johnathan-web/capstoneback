import React from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };
        const handleRegisterClick = () => {
          navigate('/Registration');
    };
  return (
    <header >
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleRegisterClick}>Register</button>
    </header>
  );
};

const log = {
  header: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px',
  },
  loginButton: {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  registerButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
}
};

export default Header;
