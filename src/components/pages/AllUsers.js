
import { Grid } from "@mui/material";
import "../pages/styles.css";
import axios from "axios";
import CardUser from "../pages/CardUser";
import Logo from '../../images/logo.png'
import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import ReactLoading from "react-loading";

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
    return (
      <>
       <Grid container justifyContent='center'>
        <Grid item sm={10}> 
           <br />
           <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
            <img style={{width:"290px", heigth:"290px"}} src={Logo} alt="Logo" / >
            <h1><NavLink to='/create-user'style={{textAlign:"center", color:"orange", textDecoration:"none", fontSize:"35px", fontWeight:"bold"}} >CREATE USERS</NavLink></h1>
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
                    name={x.name}
                    email={x.email}
                    phone={x.phone}
                    role={x.role}
                  />
                );
              })}
            </div>
        )}
      </>
    ) ;
  }
}
