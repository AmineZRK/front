import "../pages/styles.css";
import axios from "axios";
import CardComment from "../pages/CardComment";
// import Logo from '../../images/logo.png';
import React, { Component } from "react";
import ReactLoading from "react-loading";
import { textAlign } from "@mui/system";


export default class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idBook:null,
      review: [],
      isloading: true
    };
  }

  async componentDidMount() {
    this.setState({idBook:this.props.idBook,review:this.props.review,isloading:false})
    // await axios.get(`http://localhost:5000/api/v1/single-book/`,{
    //   headers:{
    //     Authorization: `Bearer ${window.localStorage.getItem('token')}`
    //   }
    // }).then((res) => {
    //   const comments = res;
    //   this.setState({ comments, isloading: false });
    // });
  }
 
  render() {
    let res = this.state.review;
    console.log(res)
    let { isloading } = this.state;

    return (
      <>
        {isloading ? (
          <ReactLoading type={"bars"} color="#021155" style={{textAlign:"center"}} />
        ) : (
            <div className="cards">
              {res?.map((x) => {
                return (
                  <CardComment
                    idBook={this.state.idBook}
                    idrev={x._id}
                    UserId={x.UserId}
                    description={x.description}
                    grade={x.grade}
                  />
                );
              })}
            </div>
        )}
      </>
    ) ;
  }
}
