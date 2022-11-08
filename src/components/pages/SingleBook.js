import { Grid } from "@mui/material";
import "../pages/styles.css";
import axios from "axios";
import Card from "../pages/Card";
import React, { Component } from "react";
import ReactLoading from "react-loading";
import { useParams } from "react-router-dom";


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
    console.log(`Data disponible`,x.imageURL);
    let { isloading } = this.state;
    return (
      <>
       <Grid container justifyContent='center'>
        <Grid item sm={10}> 
           <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
           <h1 style={{textAlign:"center"}}>SINGLE BOOK</h1>
           </div>
            <hr />
        </Grid>
       </Grid>
        {isloading ? (
          <ReactLoading type={"bars"} color="#021155" />
        ) : (
            <div className="cards">
            
                <img src={x.imageURL} alt="imageURL" style={{width:"390px", height:"250px"}} />
                    {x.title}

                    {x.author}
                    
            </div>
        )}
      </>
    );
  }
}
export default withParams(SingleBook);