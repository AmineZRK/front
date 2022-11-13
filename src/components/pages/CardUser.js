import "../pages/styles.css";
import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import axios from "axios";
// import {NavLink} from 'react-router-dom';

//Function pour supprimer à gérer
const deleteUserData = async (e) => {
  const res = await fetch(`http://localhost:5000/api/v1/delete-user/${e}`, {
    method: "DELETE",
    headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`}
}).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    window.location.reload(false)
    alert("Delete user succeffully")
 }


//Function pour modifier à gérer
const AddAdminData = async (e) => {
      console.log('ok',e);
      const res = await axios.post(`http://localhost:5000/api/v1/add-admin/${e}`,{role:true}, {
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${window.localStorage.getItem('token')}`
          }
    });

    if (res.data.status === 401 || !res.data) {
        console.log("errror")
    } else {
        console.log("Change role succeffully");
        //Pour actualiser la page automatiquement après la suppression
        window.location.reload(false);
        alert("Change role succeffully")
    }
}

export default class CardUser extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
          <p>{this.props.phone}</p>
          <p>{this.props.role}</p>
    
          <p style={{display:"flex", gap:"10px", justifyContent:"center"}}> 
              <button type="submit" className="delete" onClick={()=>deleteUserData(
                this.props.idUser
              )}>
                Delete
              </button>
          
              {this.props.role == true?"":
              <button type="submit" className="update" onClick={()=>AddAdminData(
                this.props.idUser
              )}>
              Change rôle user
              </button>

              }
              
            

            <NavLink to='/update-user'>
              <button type="submit" className="update">
              Update
              </button>
           </NavLink>
          </p>

        </div>
      </div>
    );
  }
}
