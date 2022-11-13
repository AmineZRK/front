import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Form, Tab, Tabs, Row } from "react-bootstrap";
import "../pages/styles.css";
import { useForm } from "react-hook-form";
import ReactLoading from "react-loading";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
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

const UpdateBook = () => {
  //const{register,handleSubmit}=useForm();
  let location=useLocation();
  console.log(location.state.id)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

//const [role, setRole] = useState("tech");
  const [resStatus, setResStatus] = useState("");
  const navigate = useNavigate();
  const [myData,setMyData]=useState();
  useEffect(async()=>{
   const my=await axios.get(`http://localhost:5000/api/v1/single-book/${location.state.id}`)
   console.log(my);
   setMyData(my.data.data)
  },[])
    
  console.log(myData)
  const onSubmitHandler = async (data) => {
    //data.preventDefault();
    //const dat = new FormData(data.currentTarget)
    console.log();
    //const element = document.getElementById('image') 
    //const file = element?.files?.item(0) 

    //console.log(file.name)
    const form = new FormData();
    form.append("title", data.title)
    form.append("author", data.author)
    form.append("categories", data.categories)
    form.append("description", data.description)
    form.append("price", data.price)
    form.append("isbn", data.isbn)
    form.append("nbr_pages", data.nbr_pages)
    form.append("image",data.image[0])
    // const myform = new FormData();
    // myform.append("image",file)
    //console.log('mydata',form);
  //console.log('1::::::!',file)
  // const img={
  //   fieldname: 'image',
  //   originalname: file.name,
  //   encoding: '7bit',
  //   mimetype: file.type
  // }
  // const myData = {
  //   title:dat.get('title'),
  //   author:dat.get('author'),
  //   categories:dat.get('categories'),
  //   description:dat.get('description'),
  //   price:dat.get('price'),
  //   isbn:dat.get('isbn'),
  //   nbr_pages:dat.get('nbr_pages'),
  //   image:img
  // }
  //console.log(myData);
  const res = await fetch(`http://localhost:5000/api/v1/update-book/${location.state.id}`, {
    method: "PUT",
    body: form,
    headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`}
  }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    navigate('/')
    window.location.reload(false);

  
  
    //console.log('image',form.get('image'));

  //   axios.post("http://localhost:5000/api/v1/create-book",myData,{
  //       headers: {
  //         Authorization: `Bearer ${window.localStorage.getItem('token')}`
  //       }
  //   })
  //     .then(function (response) {
  //       console.log(response.status);
  //       if (response.status === 200) {
  //         setResStatus("Create Book Successful!");
  //         navigate('/Home')
  //       } else {
  //         setResStatus("error");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
   };

  console.log(resStatus);

  return (
    
    <>
        <h1 style={{textAlign:"center", color:"orange", textDecoration:"none", fontSize:"35px", fontWeight:"bold"}}>UPDATE BOOK</h1>
        {myData!==null?(
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
                    <Form.Label>Titre</Form.Label>
                    <input
                    {...register("title")}
                    defaultValue={myData?.title}
                    name="title"
                    type="text"
                    className={`form-control`}
                    />
                  </Form.Group>

                  {/* Author */}
                  <Form.Group>
                    <Form.Label>Auteur</Form.Label>
                    <input
                      {...register("author")}
                      defaultValue={myData?.author}
                      type="text"
                      className={`form-control`}
                    />
                  </Form.Group>

                  {/* Categories */}
                  <Form.Group>
                    <Form.Label>Catégories</Form.Label>
                    <input
                      defaultValue={myData?.categories}
                      {...register("categories")}
                      type="text"
                      className={`form-control`}
                    />  
                  </Form.Group>

                  {/* Description */}
                  <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <input
                      defaultValue={myData?.description}
                      {...register("description")}
                      type="text"
                      className={`form-control`}
                    />
                  </Form.Group>

                  {/* Prix */}
                  <Form.Group>
                    <Form.Label>Prix</Form.Label>
                    <input
                      defaultValue={myData?.price}
                      {...register("price")}
                      type="text"
                      className={`form-control`}
                    />
                  </Form.Group>

                    {/* Isbn */}
                    <Form.Group>
                      <Form.Label>Isbn</Form.Label>
                      <input
                        defaultValue={myData?.isbn}
                        {...register("isbn")}
                        type="text"
                        className={`form-control`}
                      />
                    </Form.Group>

                    {/* Nbre de pages */}
                    <Form.Group>
                      <Form.Label>Nombre de pages</Form.Label>
                      <input
                          defaultValue={myData?.nbr_pages}
                          {...register("nbr_pages")}
                          type="text"
                          className={`form-control`}
                      />
                    </Form.Group>

                    {/* Image */}
                    <Form.Group>
                      <Form.Label>Image</Form.Label>
                      <input
                        {...register("image")}
                        type="file"
                        id="image"
                        className={`form-control`}
        
                      />
                    </Form.Group>

                    <br />
                    <br />
                    <Button className="btnCreateBook" type="submit">
                      Update Book
                    </Button>
                    <br />
                    <br />
                    <br />
                </Form>
              
              </Card.Body>
            </Card>
          </Row>
        </Container>
        ):(<ReactLoading type={"bars"} color="#021155" />
      )}
    </>
  );
};

export default UpdateBook;
