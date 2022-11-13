import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
// import Logo from '../images/logo.png'
import Logout from '../images/logout.webp'

const Navbar = () => {
  const navigate=useNavigate();
  const handleLogout = () => {
    console.log("Logout Clicked");
    window.localStorage.clear();
    window.localStorage.reload(false);
    navigate('/');
  }
  return <>
    <Box sx={{ flexGrow: 1 }}className="header">
      <AppBar position="static" color="" style={{ backgroundColor:'#26272b'}}>
        <Toolbar>
        <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>
              <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? 'rgba(227, 158, 31, 0.76)' : '' } }} sx={{ color: 'white', textTransform: 'none', width:"50px", heigth:"50px"}}>Home</Button>
              {/* <img style={{width:"70px", heigth:"70px"}} src={Logo} alt="Logo" / > */}
            </Typography> 
          {window.localStorage.getItem('isAdmin')=='true'?<Button component={NavLink} to='/create-book' style={({ isActive }) => { return { backgroundColor: isActive ? 'rgba(227, 158, 31, 0.76)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Create Book</Button>:""}
          {window.localStorage.getItem('isAdmin')=='true'?<Button component={NavLink} to='/all-user' style={({ isActive }) => { return { backgroundColor: isActive ? 'rgba(227, 158, 31, 0.76)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Users</Button>:""}
          {/* <Button component={NavLink} to='/create-book' style={({ isActive }) => { return { backgroundColor: isActive ? 'orange' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Create Book</Button> */}
          
          

          {/* {
            window.localStorage.getItem('token')!==null?
            <Button component={NavLink} to='/compte' sx={{ color: 'white', textTransform: 'none' }}>Mon compte</Button>:
            ''
          } */}
          
          {
            window.localStorage.getItem('token')!==null?
            <Button component={NavLink} to='/' onClick={handleLogout}  sx={{ color: 'white', textTransform: 'none' }}><img style={{width:'50px', heigth:'50px',borderRadius:'30px'}} src={Logout} alt="Logo" / ></Button>:
            <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? 'rgba(227, 158, 31, 0.76)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Signin/Signup</Button>
          }
        
        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
