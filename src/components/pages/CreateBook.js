import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Card, Button, Form, Tab, Tabs, Row } from "react-bootstrap";
import "../pages/styles.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../pages/axiosInstance";
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

const CreateBook = () => {
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
  const onSubmitHandler = (data) => {
    data.preventDefault();
    const dat = new FormData(data.currentTarget)
    console.log();
    const element = document.getElementById('image')
    const file = element.files[0]

    console.log(file)
    const form = new FormData()
    form.append("title", dat.get('title'))
    form.append("author", dat.get('author'))
    form.append("categories", dat.get('categories'))
    form.append("description", dat.get('description'))
    form.append("price", dat.get('price'))
    form.append("isbn", dat.get('isbn'))
    form.append("nbr_pages", dat.get('nbr_pages'))
    form.append("image",file,file.name)
    
    
  console.log(form.get('nbr_pages'))
  
  
    console.log(form);

    axios
      .post("http://localhost:5000/api/v1/create-book/",dat,{
        headers: {
          'content-type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
            
        
    })
      .then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
          setResStatus("Create Book Successful!");
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
       <h1 style={{textAlign:"center", color:"orange", textDecoration:"none", fontSize:"35px", fontWeight:"bold"}}>CREATE BOOK</h1>
      <Container>
        <Row className="justify-content-md-center">
          <Card className="registerCardPage">
            <Card.Header as="h5" className="registerCardHeader">
              Reserver aux administrateurs
            </Card.Header>
            <Card.Body>

              {/* Title */}
              <Form onSubmit={onSubmitHandler}>
                <Form.Group>
                  <Form.Label>Titre</Form.Label>
                  <input
                    {...register("title")}
                    type="text"
                    className={`form-control ${
                      errors.title ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.title?.message}
                  </div>
                </Form.Group>

                {/* Author */}
                <Form.Group>
                  <Form.Label>Auteur</Form.Label>
                  <input
                    {...register("author")}
                    type="text"
                    className={`form-control ${
                      errors.author ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.author?.message}
                  </div>
                </Form.Group>

                {/* Categories */}
                <Form.Group>
                  <Form.Label>Catégories</Form.Label>
                  <input
                    {...register("categories")}
                    type="text"
                    className={`form-control ${
                      errors.categories ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.categorie?.message}
                  </div>
                </Form.Group>

                {/* Description */}
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <input
                    {...register("description")}
                    type="text"
                    className={`form-control ${
                      errors.description ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.description?.message}
                  </div>
                </Form.Group>

                {/* Prix */}
                <Form.Group>
                  <Form.Label>Prix</Form.Label>
                  <input
                    {...register("price")}
                    type="text"
                    className={`form-control ${
                      errors.price ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.price?.message}
                  </div>
                </Form.Group>

                  {/* Isbn */}
                  <Form.Group>
                  <Form.Label>Isbn</Form.Label>
                  <input
                    {...register("isbn")}
                    type="text"
                    className={`form-control ${
                      errors.isbn ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.isbn?.message}
                  </div>
                </Form.Group>

                  {/* Nbre de pages */}
                  <Form.Group>
                  <Form.Label>Nombre de pages</Form.Label>
                  <input
                    {...register("nbr_pages")}
                    type="text"
                    className={`form-control ${
                      errors.nbr_pages ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.nbr_pages?.message}
                  </div>
                </Form.Group>

                  {/* Image */}
                  <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <input
                    {...register("image")}
                    type="file"
                    id="image"
                    className={`form-control ${
                      errors.image ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.image?.message}
                  </div>
                </Form.Group>

                <br />
                <Button className="registerButton" type="submit" style={{padding:"10px", width:"1263px"}}>
                  Create Book
                </Button>
              </Form>
            
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default CreateBook;
