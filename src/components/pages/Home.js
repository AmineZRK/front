import { Grid } from "@mui/material";
import "../pages/styles.css";
import "../footer.css"
import axios from "axios";
import Card from "../pages/Card";
import Logo from '../../images/logo.png'
import React, { Component } from "react";
//import {NavLink} from 'react-router-dom';
import ReactLoading from "react-loading";
import Footer from "../Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isloading: true
    };
  }

  async componentDidMount() {
    await axios.get(`http://localhost:5000/api/v1/all-book`).then((res) => {
      const books = res;
      this.setState({ books, isloading: false });
    });
  }

  render() {
    let res = this.state.books;
    let { isloading } = this.state;
    return (
      <>
       <Grid container justifyContent='center'>
        <Grid item sm={10}> 
           <br />
           <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
            <img style={{width:"400px", heigth:"400px"}} src={Logo} alt="Logo" / >

            {/* {window.localStorage.getItem('isAdmin')==="true"?
            <h1><NavLink to='/create-book'style={{textAlign:"center", color:"rgba(227, 158, 31, 0.76)", textDecoration:"none", fontSize:"35px", fontWeight:"bold"}} >CREATE BOOK</NavLink></h1>
            :""
            } */}
            
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
                  <Card
                    id = {x._id}
                    imageURL={x.imageURL}
                    title={x.title}
                    categories={x.categories}
                    description={x.description}
                    price={x.price}
                    isbn={x.isbn}
                    nbr_pages={x.nbr_pages}
                    author={x.author}
                    createdAt = {x.createdAt}
                  />
                );
              })}
               <Footer />
            </div>
        )}
      </>
    );
  }
}
