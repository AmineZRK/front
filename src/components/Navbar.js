import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate=useNavigate();
  const handleLogout = () => {
    console.log("Logout Clicked");
    window.localStorage.clear();
    navigate('/');
  }
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>BOOK</Typography>

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? 'orange' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>
          {window.localStorage.getItem('isAdmin')=='true'?<Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? 'white' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Users</Button>:""}
          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? 'orange' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>
          {window.localStorage.getItem('token')!==null?
            <Button component={NavLink} to='/' onClick={handleLogout}  sx={{ color: 'white', textTransform: 'none' }}>Logout</Button>:
            <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? 'orange' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>
          }
          

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
