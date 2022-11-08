import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const [titre, setTitre] = useState("");

  const [auteur, setAuteur] = useState("");

  const [categorie, setCategorie] = useState("");

  const [description, setDescription] = useState("");

  const [prix, setPrix] = useState("");

  const [isbn, setIsbn] = useState("");

  const [np, setNp] = useState("");

  const [file, setFile] = useState("");

  const history = useNavigate();

  const setdata = (e) => {
    const { value } = e.target;
    setTitre(value);
    setAuteur(value);
    setCategorie(value);
    setDescription(value);
    setPrix(value);
    setIsbn(value);
    setNp(value);
  }

  const setimgfile = (e) => {
    setFile(e.target.files[0])
  }

  // addbook data

  const addBookData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("image", file);
    formData.append("titre", titre);
    formData.append("author", auteur);
    formData.append("categorie", categorie);
    formData.append("description", description);
    formData.append("price", prix);
    formData.append("isbn", isbn);
    formData.append("nbr_pages", np);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    //const res = await axios.post("/register", formData, config);

    // if (res.data.status === 401 || !res.data) {
    //   console.log("errror")
    // } else {
    //   history("/")
    // }
  }

  return (
    <>
      <div className="container mt-3">
        <h1>Upload Your Img Here</h1>

        <Form className='mt-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titre</Form.Label>
            <Form.Control type="text" name='titre' onChange={setdata} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Auteur</Form.Label>
            <Form.Control type="text" name='auteur' onChange={setdata} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Catégorie</Form.Label>
            <Form.Control type="text" name='categorie' onChange={setdata} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name='description' onChange={setdata} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Prix</Form.Label>
            <Form.Control type="text" name='prix' onChange={setdata} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Isbn</Form.Label>
            <Form.Control type="text" name='isbn' onChange={setdata} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de pages</Form.Label>
            <Form.Control type="text" name='np' onChange={setdata} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select Your Image</Form.Label>
            <Form.Control type="file" onChange={setimgfile} name='photo' placeholder="" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={addBookData}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Register