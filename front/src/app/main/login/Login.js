import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { login } from '../../services/API/Auth/auth.service';
import { Redirect } from "react-router-dom";

const Login = () => {
  const [ credentials, setCredentials ] = useState({
    username: '',
    password: '',
  });

  const modifyCredentials = target => {
    const { name, value } = target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleValidation = async () => {
    await login(credentials);
    return <Redirect to={'/'} />
  };

  return (
    <div className="w-1/3 flex login-card flex-col m-auto mt-32 space-y-6 p-8">
      <TextField
        className="w-2/3 self-center m-auto"
        name="username"
        variant="outlined"
        value={credentials.username}
        label={'Username'}
        onChange={e => modifyCredentials(e.target)}
      />
      <TextField
        className="w-2/3 self-center m-auto"
        type="password"
        name="password"
        variant="outlined"
        value={credentials.password}
        label={'Password'}
        onChange={e => modifyCredentials(e.target)}
      />
      <Button
        variant='contained'
        color="primary"
        className="w-1/3 self-center m-auto"
        onClick={() => handleValidation()}
      >
        Login
      </Button>
    </div>
  )
};

export default Login;