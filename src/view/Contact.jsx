// import React, { useEffect, useState } from 'react';
// import {NavLink, useNavigate} from 'react-router-dom';


// import { useFormik,Formik, Form, Field, ErrorMessage } from 'formik';
// import * as yup from "yup";

// import { MyInput } from '../components/MyInput';
// import { Button, Paper } from '@mui/material';
// import { MyButton } from '../components/MyButton';

// export const Contact = ({show,ema,passwor}) => {
 
//   const[msg,setMsg]=useState("");
//   const[el,setEl]=useState("");
//   const[ps,setPs]=useState("");
//   const[disp,setDisp]=useState("none");
//   const navigate = useNavigate();




//   return (
//     <Paper>
//     <Formik 
//     initialValues= {{name:"",email:"", message:""}}
//     validationSchema = {yup.object({
      
//         name: yup
//         .string()
//         .matches(/^[A-Za-z ]*$/, 'Please enter valid name').
//         max(30,"Must be less than 30 characters")
//         .required("Required"),
        
//       email: yup
//       .string().
//       email('invalid email address')
//       .required("Required"),

//         message: yup
//         .string().
//         min(30,"Must be at least 30 character")
//         .required("Required")

//     })}
//     onSubmit = {(values) => {

//       // mutate(values);
//       alert(JSON.stringify(values, null, 2))
//       console.log(values);

//       // checkPass();
//     }}>
//             <Form className='flex-col content-center justify-items-center'>
//             {/* <Form style={{display:show,flexDirection:"column", alignItems:"center", width:"500px"}}> */}
//             <h3>Contact Me</h3>

//             <div style={{display:"flex",justifyContent:'center', alignItems:"center"}}>
//             <Field name="name" type="text" startAdornment="Name:" error={ErrorMessage} helperText={ErrorMessage.name.name} as={MyInput}/>
//             {/* <ErrorMessage name="name"/> */}
//             </div>

//             <div style={{display:"flex",justifyContent:'center', alignItems:"center"}}>
//             <label htmlFor="email">Email: </label>
//             <div style={{display:"flex",flexDirection:"column"}}>
//             <Field name="email" type="text" startAdornment="Email:" error={ErrorMessage} helperText={ErrorMessage.ErrorMessage} as={MyInput}/>
//             <ErrorMessage name="email"/>
//         </div>
//             </div>

//             <div style={{display:"flex",justifyContent:'center', alignItems:"center"}}>
//             <label htmlFor="message">Message: </label>
//             <div style={{display:"flex",flexDirection:"column"}}>
//             <Field name="message" type="text" as={MyInput} />
//             <ErrorMessage name="message"/>
//             </div>
//             </div>

//             <div style={{marginTop:"5%", display:"flex",justifyContent:"center",alignItems:"center",gap:"5%"}}>
//             <Button type='submit'> Get in Touch</Button> 
//             </div>
//         </Form>
//     </Formik>
 
//     </Paper>
//   );
// };

import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {Button, Paper, TextField} from '@mui/material';
import { MyInput } from '../components/MyInput';

const validationSchema = yup.object({
          name: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name').
        max(30,"Must be less than 30 characters")
        .required("Required"),
  
      email: yup
      .string().
      email('invalid email address')
      .required("Required"),

        message: yup
        .string().
        min(30,"Must be at least 30 character")
        .required("Required")
});

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='flex justify-center w-screen p-5 bg-zinc-500'>
    <Paper className='p-8 items-center'>
        <h3> Contact Me</h3>
      <form onSubmit={formik.handleSubmit}>
          <MyInput
            
            id="name"
            name="name"
            label="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        <MyInput
          fullWidth
          id="email"
          name="email"
          label="Email"
          startAdornment={<i class="bi bi-envelope"></i>
        }
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
          <MyInput
            id="message"
            name="message"
            label="message"
            startAdornment={<i class="bi bi-chat-text"></i>}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        <Button  variant="secondary" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Paper>
    </div>
  );
};



