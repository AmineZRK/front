import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';
import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from '@mui/material';

import "bootstrap/dist/css/bootstrap.min.css";
const WriteComment= (props) => {
  const[id,setId]=useState(props.idBook)
    const [error, setError] = useState({
      status: false,
      msg: "",
      type: ""
    })
    // const navigate = useNavigate();
    const handleSubmit = (e) => {
      console.log(id);
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const actualData = {
        bookId:id,
        message: data.get('message'),
        grade: data.get('grade'),
       
      }
      if (actualData.message && actualData.grade !== null) {
          axios.put('http://localhost:5000/api/v1/add-review/',actualData,
          {
              headers:{
                  Authorization: `Bearer ${window.localStorage.getItem('token')}`
                }
          }
          );
          console.log(actualData);
          document.getElementById('registration-form').reset()
          setError({ status: true, msg: "Create Review Successful", type: 'success' })
          window.location.reload(false)
          // navigate('/')
       
      } else {
        setError({ status: true, msg: "All Fields are Required", type: 'error' })
      }
    }
    return <>
      <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
              <div className="review-comment-form">
                <div className="from-group">
                  <textarea
                    class="comment-form comment-form-comment"
                    placeholder="Your review"
                    rows="8"
                    columns="45"
                    margin='normal' 
                    required fullWidth id='message' 
                    name='message' 
                    label='Message'
                  ></textarea>
                  <input
                    type="text"
                    class="comment-form comment-form-author"
                    placeholder="Your grade"
                    margin='normal' 
                    required fullWidth id='grade' 
                    name='grade' 
                    label='Grade'
                  />

                </div>
                <button className="registerButton" type="submit" style={{padding:"5px"}}>
                Add a comment
                </button>
                <div className="br"></div>
              </div>
            {/* <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Add a comment</Button>
            </Box> */}
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
      </Box>
    </>;
  };
  
  export default WriteComment;
  