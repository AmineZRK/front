import { TextField, Button, Box, Alert } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    if (actualData.email && actualData.password) {
      axios.post('http://localhost:5000/api/v1/login',actualData).then(
        (dat)=>{
          console.log(error.response)
          if (dat){
            console.log("dataglobal",dat);
        console.log("datalibghit",dat.data);
        window.localStorage.setItem('token', dat.data.token);
        window.localStorage.setItem('isAdmin',dat.data.isAdmin)
        navigate('/')
        document.getElementById('login-form').reset()
        setError({ status: true, msg: "Login Success", type: 'success' });
          }else{setError({ status: true, msg: "error", type: 'error' });}
        
        
        }
      ).catch(function(error){
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setError({ status: true, msg: error.response.data.message , type: 'error' });
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      })

      
      
      // navigate('/home')
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }

  }
  
  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
      </Box>
      <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
      {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
    </Box>
  </>;
};

export default UserLogin;
