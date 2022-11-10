import { Grid } from "@mui/material";
import "../pages/styles.css";
import axios from "axios";
// import Card from "../pages/Card";

import React, { Component } from "react";
import { NavLink} from 'react-router-dom';
import ReactLoading from "react-loading";
import { useParams } from "react-router-dom";
import WriteComments from "./WriteComment";
import ViewComments from "../pages/ViewComments";


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
   }
class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book:{},
      isloading: true
    };
  }

  async componentDidMount() {
    let { id } = this.props.params;
    console.log(id);
    await axios.get(`http://localhost:5000/api/v1/single-book/${id}`).then((res) => {
        // console.log(res);
      const book = res.data.data;
      this.setState({ book, isloading: false });
    });
  }

  render() {
    
    let x = this.state.book;
    console.log('my idddddddd',x._id)
    console.log(x.review)
    console.log(`Data disponible`,x.imageURL);
    let { isloading } = this.state;

       //Function Logout;
       const handleLogout = () => {
        console.log("Logout Clicked");
        window.localStorage.clear();
        // navigate('/');
      }
    return (
      <>
        <Grid container justifyContent='center'>
        <Grid item sm={10}> 
           <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
           <br />
           <div className="btnHeaderSingle">
            <h1><NavLink to='/' >retour</NavLink></h1>
            <h1><NavLink to='/'onClick={handleLogout} >logout</NavLink></h1>
           </div>
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
          <div>
              <div className="card-single-book">
              <img src={x.imageURL} alt="imageUrl" className="imgSingleBook" />
               <div className="card-body-single-book">
                 <h2  style={{color:"#000", textTransform:"uppercase"}}>{x.title}</h2>
                 <p  style={{color:"orange", textTransform:"uppercase"}}>{x.categories}</p>
                 <p style={{textAlign:"center"}}>{x.description}</p>
                 <p>PRIX : <strong style={{fontWeight:"bold"}}>{x.price} €</strong></p>
                 <p>ISBN :  <strong style={{fontWeight:"bold"}}>{x.isbn}</strong></p>
                 <p>{x.nbr_pages} pages</p>
                 <p>{x.createdAt}</p>    
                 <h5>Publué par <strong style={{color:"green", textDecoration:"underline"}}>{x.author}</strong></h5>
                 <br />
              </div>
              <div>
               <img src={x.imageURL} alt="imageUrl" className="imgSingleBook" />
              </div>
            </div> 
        
               <br />

              <div className="cardComments">
                <div className="comments">
                  <h1 style={{fontWeight:"100"}}>Commentaires</h1>
                  
                  <ViewComments 
                    idBook={x._id}
                    review={x.review}
                  />
                </div>
                <div>
                  {/* <h1 className="commenter">Commenter</h1> */}
                  <WriteComments />
                </div>
              </div>
          </div>
        )}
      </>
    );
  }
}
export default withParams(SingleBook);