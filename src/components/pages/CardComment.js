import "../pages/styles.css";
import React, { Component } from "react";
import axios from "axios";

// import {NavLink} from 'react-router-dom';

//Function pour supprimer à gérer
const dltReview = async (id,idbook) => {
  const res = await axios.put(`http://localhost:5000/api/v1/delete-review/${idbook}&${id}`, {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
  });

  if (res.data.status === 401 || !res.data) {
      console.log("errror")
  } else {
      console.log("book delete");
  }

}

//Function pour modifier à gérer
const updateCommentData = async (e) => {}

export default class CardComment extends Component {
  state={
    name:null
  }
  async componentDidMount(){
    const id = this.props.UserId
    const name = await axios.get(`http://localhost:5000/api/v1/single-user/${id}`)
    this.setState({name:name.data.data.name})
    console.log(name.data.data)

  }
  render() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="card-body">
          <h2>{this.state.name}</h2>
          <h2>{this.props.description}</h2>
          <p>{this.props.grade}</p>
          <p style={{display:"flex", gap:"10px", justifyContent:"center"}}> 
            <button type="submit" className="delete" onClick={()=>dltReview(this.props.idrev,this.props.idBook)}>
              Delete
            </button>

            <button type="submit" className="update" onClick={updateCommentData}>
            Update
            </button>
          </p>

        </div>
      </div>
    );

    
  }
}
