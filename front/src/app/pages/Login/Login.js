import React, { useState } from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
/* ------------- || Third Party || ------------- */
// import * as Yup from 'yup';
/* ------------- || External Components Library || ------------- */
import { IconButton, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
/* ------------- || Action Redux || ------------- */
import {
    login,
    fetchIot,
    fetchRoom,
    fetchRoomIot,
    fetchScenario,
    fetchAction,
    fetchTrigger,
    fetchCondition,
    fetchScenarioAction,
    fetchScenarioTrigger,
    fetchScenarioCondition,
    fetchLog,
    // fetchModel,
    fetchICategory,
    fetchICategoryIot
} from '../../redux/slices';
/* ------------- || Api-client || ------------- */
// import { apiClient } from '../../adapters/api-client';
import AuthService from '../../adapters/api-client/authentification/auth.service';
/* ------------- || Providers imports || ------------- */
import useSocket from '../../providers/SocketProvider';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = AuthService.getCurrentUser();
    const { connect } = useSocket();
    let location = useLocation();
    // const [validation, setValidation] = useState({ username: '', password: '' });
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    // const [isSubmitting, setIsSubmitting] = useState(false);
    // credentialSchema = Yup.object().shape({
    //   email: Yup.string()
    //     .email('The e-mail must be a valid email address.')
    //     .required('The e-mail field is required.'),
    // });
    const initLocalStorage = () => {
        dispatch(fetchIot());
        dispatch(fetchRoom());
        dispatch(fetchRoomIot());
        dispatch(fetchScenario());
        dispatch(fetchAction());
        dispatch(fetchTrigger());
        dispatch(fetchCondition());
        dispatch(fetchScenarioAction());
        dispatch(fetchScenarioTrigger());
        dispatch(fetchScenarioCondition());
        dispatch(fetchLog());
        dispatch(fetchICategory());
        dispatch(fetchICategoryIot());
        dispatch(login());
    };
    // const hasError = (field) => {
    //   return setValidation[field] != null;
    // };
    // const validateForm = () => {
    //   let validationErrors = {
    //     email: null,
    //   };
    //   const validationOptions = {
    //     abortEarly: false
    //   };
    //   try {
    //     this.userSchema.validateSync(this.state, validationOptions);
    //     return true;
    //   } catch (e) {
    //     if (e.name !== 'ValidationError') {
    //       alert('Unknown error occurred while validating the inputs');
    //       return false;
    //     }
    //     for (let index in e.inner) {
    //       const key = e.inner[index].path;
    //       validationErrors[key] = e.errors[index];
    //     }
    //     setValidation(validationErrors);
    //     return false;
    //   }
    // }
    // const setServerValidationErrors = (failures) => {
    //   let validationErrors = {
    //     email: null,
    //   };
    //   if (failures.hasOwnProperty('email')) {
    //     validationErrors.email = failures.email.join(', ');
    //   }
    //   setValidation(validationErrors);
    // }
    const handleChange = (target) => {
        const { name, value } = target;
        setCredentials({ ...credentials, [name]: value });
    };
    const handleLogin = (values) => {
        // if (! this.validateForm()) {
        //   return;
        // }
        // setIsSubmitting(true);
        AuthService.signin(values).then(async () => {
            // setIsSubmitting(false);
            initLocalStorage();
            connect();
            navigate('/app/dashboard');
        });
        // .catch((error) => {
        //     const response = error.response;
        //     if (response.status === 422) {
        //         this.setServerValidationErrors(response.data.failures);
        //         // setIsSubmitting(false);
        //         return;
        //     }
        // });
    };
    if (isAuth) {
        return <Navigate to="/app/dashboard" state={{ from: location }} replace />;
    }
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '1px 1px 5px black',
                padding: '16px',
                paddingLeft: '32px',
                paddingRight: '32px',
                borderRadius: '5px'
            }}
        >
            <IconButton disabled={true} style={{ marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'rgb(245, 0, 87)' }}>
                <LockOutlinedIcon style={{ color: 'white' }} fontSize={'large'} />
            </IconButton>
            <Typography variant={'h4'} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                J.A.R.V.I.S
            </Typography>
            <TextField
                variant={'standard'}
                label={'Username'}
                name={'username'}
                value={credentials.username}
                // errror={hasError('username')}
                // helperText={validation.email}
                onChange={(e) => handleChange(e.target)}
                style={{ width: '100%', marginTop: '32px' }}
            />
            <TextField
                variant={'standard'}
                label={'Password'}
                name={'password'}
                value={credentials.password}
                onChange={(e) => handleChange(e.target)}
                type={'password'}
                style={{ width: '100%', marginTop: '64px' }}
            />
            <Button
                style={{ borderRadius: '5px', backgroundColor: '#004AAD', color: 'white', width: '100%', marginTop: '32px' }}
                onClick={() => handleLogin(credentials)}
                // disabled={isSubmitting}>
            >
                Sign in
            </Button>
        </div>
    );
};

export default Login;
