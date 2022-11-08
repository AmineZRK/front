import { Grid } from "@mui/material";
import "../pages/styles.css";
import axios from "axios";
import CardUser from "../pages/CardUser";
import React, { Component } from "react";
import ReactLoading from "react-loading";
import { useParams } from "react-router-dom";


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
   }
class SingleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{},
      isloading: true
    };
  }

  async componentDidMount() {
    let { id } = this.props.params;
    console.log(id);
    await axios.get(`http://localhost:5000/api/v1/single-user/${id}`).then((res) => {
        console.log(res);
      const user = res;
      this.setState({ user, isloading: false });
    });
  }

  render() {
    let x = this.state.user;
    console.log(`Data disponible`,x.data);
    let { isloading } = this.state;
    return (
      <>
       <Grid container justifyContent='center'>
        <Grid item sm={10}> 
           <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
           <h1 style={{textAlign:"center"}}>SINGLE USER</h1>
           </div>
            <hr />
        </Grid>
       </Grid>
        {isloading ? (
          <ReactLoading type={"bars"} color="#021155" />
        ) : (
            <div className="cards">
              {(() => {
                return (
                  <CardUser
                    id = {x._id}
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
    );
  }
}
export default withParams(SingleUser);