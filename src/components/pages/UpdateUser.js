import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Card, Button, Form, Tab, Tabs, Row } from "react-bootstrap";
import "../pages/styles.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "../pages/axiosInstance";
const FormData = require('form-data');
const schema = yup.object().shape({
  title: yup
    .string()
    .required("Please enter your title")
    .min(2)
    .max(24),
    author: yup.string().required("Please enter author").min(2).max(24),
    categories: yup.string().required("Please your categories"),
    description: yup.string().required("Please your description"),
    //description: yup.string().email().required("Email is invalid"),
    price: yup.number().required("Please your price"),
    isbn: yup.string().required("Please your isbn"),
    nbr_pages: yup.number().required("Please your pages number"),
});

const UpdateUser = () => {
    //const{register,handleSubmit}=useForm();
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm({
      resolver: yupResolver(schema)
    });
  
  //   const [role, setRole] = useState("tech");
    const [resStatus, setResStatus] = useState("");
    const navigate = useNavigate();
    const [form,setForm]=useState();
    const onSubmitHandler = async (data) => {
      //data.preventDefault();
      //const dat = new FormData(data.currentTarget)
      console.log();
      //const element = document.getElementById('image') 
      //const file = element?.files?.item(0) 
  
      //console.log(file.name)
      const form = new FormData();
      form.append("name", data.name)
      form.append("email", data.email)
      form.append("phone", data.phone)
      form.append("password", data.password)

    const res = await fetch("http://localhost:5000/api/v1/update-user", {
      method: "PUT",
      body: form,
      headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`}
    }).then((res) => res.json());
     alert(JSON.stringify(`${res.message}, status: ${res.status}`));
     navigate('/all-user')
     alert("Update user succeffully")
  
     };
  
    console.log(resStatus);
  
    return (
      <>
  <h1 style={{textAlign:"center", color:"orange", textDecoration:"none", fontSize:"35px", fontWeight:"bold"}}>UPDATE USER</h1>
      <Container>
        <Row className="justify-content-md-center">
          <Card className="registerCardPage">
            <Card.Header as="h5" className="registerCardHeader">
              Reserver aux administrateurs
            </Card.Header>
            <Card.Body>

              {/* Name */}
              <Form onSubmit={handleSubmit(onSubmitHandler)}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <input
                  {...register("name")}
                  name="name"
                    type="text"
                    className={`form-control`}
                    
                  />
                 
                </Form.Group>

                {/* Email */}
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <input
                    {...register("email")}
                    type="email"
                    className={`form-control`}
                    
                  />
                 
                </Form.Group>

                {/* Téléphone */}
                <Form.Group>
                  <Form.Label>Téléphone</Form.Label>
                  <input
                    {...register("phone")}
                    type="text"
                    className={`form-control`}
                    
                  />
                </Form.Group>

                {/* Téléphone */}
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <input
                    {...register("password")}
                    type="text"
                    className={`form-control`}
                    
                  />
                </Form.Group>
                <br />
                <br />
                <Button className="btnCreateBook" type="submit">
                  Update User
                </Button>
                <br />
                <br />
                <br />
              </Form>
            
            </Card.Body>
          </Card>
        </Row>
      </Container>
      </>
    );
  };
  
  export default UpdateUser;