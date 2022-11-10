import React from 'react'
import { useForm } from 'react-hook-form';
const Test = () => {
    const{register,handleSubmit}=useForm();
    const FormData = require('form-data');
    const onSubmitHandler= async (data)=>{
        //const form=new FormData(e.currentTarget);
        console.log(data.image[0]);
        console.log(data.title)
        const form =new FormData();
        form.append("image",data.image[0])
        form.append("title",data.title)
        form.append("author",data.author)

        const res = await fetch("http://localhost:5000/api/v1/create-book", {
            method: "POST",
            body: form,
            headers:{Authorization: `Bearer ${window.localStorage.getItem('token')}`}
        }).then((res) => res.json());
        alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmitHandler) }>
            <label>
                title:
                <input id='title' type="text" name="title" {...register('title')}/>
            </label>
            <label>
                auteur:
                <input id='author' type="text" name="author" {...register('author')}/>
            </label>
            <label>
                title:
                <input id='image' type="file" name="image" {...register('image')} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Test