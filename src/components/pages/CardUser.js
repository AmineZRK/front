import "../pages/styles.css";
import React, { Component } from "react";
// import {NavLink} from 'react-router-dom';

//Function pour supprimer à gérer
const deleteUserData = async (e) => {}

//Function pour modifier à gérer
const updateUserData = async (e) => {}

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
            <button type="submit" className="delete" onClick={deleteUserData}>
              Delete
            </button>

            <button type="submit" className="update" onClick={updateUserData}>
            Update
            </button>
          </p>

        </div>
      </div>
    );

    
  }
}
