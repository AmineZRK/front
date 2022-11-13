import { Grid } from "@mui/material";
import "../pages/styles.css";
import "../footer.css"
import axios from "axios";
import CardUser from "../pages/CardUser";
// import Logo from '../../images/logo.png';
import React, { Component } from "react";
import { NavLink} from 'react-router-dom';
import ReactLoading from "react-loading";
// import Footer from "../Footer";



export default class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isloading: true
    };
  }

  async componentDidMount() {
    await axios.get(`http://localhost:5000/api/v1/all-user`,{
      headers:{
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    }).then((res) => {
      const users = res;
      this.setState({ users, isloading: false });
    });
  }
 
  render() {
    let res = this.state.users;
    let { isloading } = this.state;

    //Function Logout;
    const handleLogout = () => {
    console.log("Logout Clicked");
    window.localStorage.clear();
    // navigate('/');
  }
    return (
      <>
        <div>
          <Grid container justifyContent='center'>
           <Grid item sm={10}> 
              <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
              <br />
                {/* <img style={{width:"290px", heigth:"290px"}} src={Logo} alt="Logo" / > */}
                {/* <h1 className="titleSingleBook">BOOK STARBOOK ACADEMY</h1> */}
                {/* <h1 style={{textAlign:"center"}}>ALL BOOKS</h1> */}
              </div>
              <hr />
            
          </Grid>
         </Grid>
          {isloading ? (
            <ReactLoading type={"bars"} color="#021155" />
          ) : (
              <div className="cards">
                {res?.data?.data?.map((x) => {
                  return (
                    <CardUser
                      idUser={x._id}
                      name={x.name}
                      email={x.email}
                      phone={x.phone}
                      role={x.role}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </>
    );
  }
}
