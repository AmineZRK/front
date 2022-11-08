import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png'



const Navbar = () => {
  const navigate=useNavigate();
  const handleLogout = () => {
    console.log("Logout Clicked");
    window.localStorage.clear();
    window.location.reload(false);
    navigate('/');
  }
  return <>
    <Box sx={{ flexGrow: 1 }}  style={{position:"sticky", top:"0", zIndex:"1000"}}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}><img style={{width:"70px", heigth:"70px"}} src={Logo} alt="Logo" / ></Typography>
          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? 'orange' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

          {window.localStorage.getItem('isAdmin')=='true'?<Button component={NavLink} to='/create-book' style={({ isActive }) => { return { backgroundColor: isActive ? 'white' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Create Book</Button>:""}
          {/* <Button component={NavLink} to='/create-book' style={({ isActive }) => { return { backgroundColor: isActive ? 'orange' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Create Book</Button> */}
          
          <Button component={NavLink} to='/all-user' style={({ isActive }) => { return { backgroundColor: isActive ? 'orange' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Users</Button>

          
          
          {window.localStorage.getItem('token')!==null?
         

          <Button component={NavLink} to='/' onClick={handleLogout}  sx={{ color: 'white', textTransform: 'none' }}>Logout</Button>:
          <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? 'orange' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Signin/Signup</Button>
          }
          

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
