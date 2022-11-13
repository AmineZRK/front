import "../pages/styles.css";
import React, { Component } from "react";
import axios from "axios";

// import {NavLink} from 'react-router-dom';

//Function pour supprimer à gérer
const dltReview = async (id,idbook) => {
//   const res = await axios.put(`http://localhost:5000/api/v1/delete-review/${idbook}&${id}`, {
//       headers: {
//           Authorization: `Bearer ${window.localStorage.getItem('token')}`
//       }
//   });

//   if (res.data.status === 401 || !res.data) {
//       console.log("errror")
//   } else {
//       console.log("book delete");
//   }
const res = await fetch(`http://localhost:5000/api/v1/delete-review/${idbook}&${id}`, {
    method: "PUT",
    headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`}
}).then((res) => res.json());
alert(JSON.stringify(`${res.message}, status: ${res.status}`));
window.location.reload(false)
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
          {window.localStorage.getItem('isAdmin')=='true'||this.props.UserId==window.localStorage.getItem('userId')?<button type="submit" className="delete" onClick={()=>dltReview(this.props.idrev,this.props.idBook)}>
              Delete
            </button>:""}
            
                    
          </p>

        </div>
      </div>
    );

    
  }
}
