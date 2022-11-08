import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Card, Button, Form, Tab, Tabs, Row } from "react-bootstrap";
import "../pages/styles.css";
import { useForm} from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "../pages/axiosInstance";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(2)
    .max(24),
    email: yup.string().email().required("Email is invalid"),
    phone: yup.number().required("Please your phone"),
    role: yup.string().required("Please your role"),
   //email: yup.string().required("Please enter author").min(2).max(24),
});

const CreateUser = () => {
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
  const onSubmitHandler = (data) => {
    // data.role = role;
    console.log(data);

    axios
      .post("http://localhost:5000/api/v1/create-user/", data)
      .then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
          setResStatus("Create User Successful!");
          navigate('/Home')
        } else {
          setResStatus("error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(resStatus);

  return (
    <>
       <h1 style={{textAlign:"center", color:"orange", textDecoration:"none", fontSize:"35px", fontWeight:"bold"}}>CREATE USER</h1>
      <Container>
        <Row className="justify-content-md-center">
          <Card className="registerCardPage">
            <Card.Header as="h5" className="registerCardHeader">
              Reserver aux administrateurs
            </Card.Header>
            <Card.Body>

              {/* Title */}
              <Form onSubmit={handleSubmit(onSubmitHandler)}>
                <Form.Group>
                  <Form.Label>Nom</Form.Label>
                  <input
                    {...register("name")}
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.name?.message}
                  </div>
                </Form.Group>

                {/* Author */}
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <input
                    {...register("email")}
                    type="text"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </Form.Group>

                {/* Categories */}
                <Form.Group>
                  <Form.Label>Téléphone</Form.Label>
                  <input
                    {...register("phone")}
                    type="text"
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.phone?.message}
                  </div>
                </Form.Group>
                
                <div style={{display:"flex", justifyContent:"center", gap:"10px", flexDirection:"column", alignItems:"center"}}>
                    {/* Description */}
                  <Form.Group style={{paddingTop:"15px", width:"480px"}}>
                    <Form.Select aria-label="Default select example"
                    
                    {...register("role")}
                      
                    className={`form-control ${
                      errors.role ? "is-invalid" : ""
                    }`}
                    
                    >
                      <div className="invalid-feedback">
                        {errors.role?.message}
                      </div> 
                      <option value="1">true</option>
                      <option value="2">false</option>
                    </Form.Select>
                  </Form.Group>

                  <br />
                  <Button className="registerButton" type="submit" style={{padding:"10px", width:"470px"}} >
                    Create User
                  </Button>
                </div>
               
              </Form>
            
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default CreateUser;

