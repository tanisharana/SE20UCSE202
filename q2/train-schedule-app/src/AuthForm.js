import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = () => {
  const [token, setToken] = useState('');

  const handleAuthentication = async () => {
    try {
      const response = await axios.post(
        'http://20.244.56.144/train/auth/',
        {
          rollNumber: 'SE20UCSE202',
          accessCode: 'jYjgQH',
        }
      );
      setToken(response.data.token);
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleAuthentication}>Authenticate</button>
      <p>Token: {token}</p>
    </div>
  );
};

export default AuthForm;
