import AccountCircle from '@mui/icons-material/AccountCircle'
import { Box, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import PasswordIcon from '@mui/icons-material/Password';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Register() {
    let name=useRef(null)
    let email=useRef(null)
    let password=useRef(null)
    const navigate = useNavigate();
    const[error,setError]=useState({name:false,email:false,password:false})
    const handleSubmit=(e)=>
        {
            e.preventDefault();
            console.log(name.current.value)           
            console.log(email.current.value)           
            console.log(password.current.value) 
            setError((prev)=>{
                return{...prev,name:false,email:false,password:false}
                
            })
            
            if(name.current.value && email.current.value && password.current.value)
                {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if(!emailRegex.test(email))
                        {
                            setError((prev)=>{
                                return{...prev,name:false,email:true,password:false};
                            })
                            console.log("Invalid Mail id")
                            alert("Invalid Email")
                        }
                    console.log(name.current.value)           
                    console.log(email.current.value)           
                    console.log(password.current.value) 
                }
                else{
                    console.log("please fill all field")
                    if(!name.current.value && !email.current.value && !password.current.value)
                        {
                            setError((prev)=>
                            {
                                return{...prev,name:true,email:true,password:true};
                            })
                        }
                        else if(!name.current.value)
                            {
                                setError((prev)=>{
                                    return{...prev,name:true};
                                })
                            }
                        else if(!email.current.value)
                            {
                                setError((prev)=>{
                                    return{...prev,email:true};
                                })
                            }
                        else if(!password.current.value)
                            {
                                setError((prev)=>{
                                    return{...prev,password:true};
                                })
                            }
                }
        }

  return (
    <Box component="form">
        <Box sx={{ '& > :not(style)': { m: 2 } ,
    display: 'flex', 
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"100vh",
    flexDirection:"column"
    }}>
      <Typography color={"black"} fontSize={"10px"}>Register</Typography>
      <Box>
      <TextField
        id="input-with-icon-textfield"
        label="Username"
        inputRef={name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      /> 
      {error.name&&(<Typography color={"red"} fontSize={"8px"}>
        Fill the name
      </Typography>)}
      </Box>
      <Box>
      <TextField
        id="email-with-icon-textfield"
        label="Email"
        inputRef={email}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      /> 
      {error.email&&(<Typography color={"red"} fontSize={"8px"}>
    Fill the correct email
    </Typography>)}    
    </Box>
    <Box>
      <TextField
        id="password-with-icon-textfield"
        label="Password"
        type='password'
        inputRef={password}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />   
      {error.password&&(<Typography color={"red"} fontSize={"8px"}>
    Fill the password
    </Typography>)}    
    </Box>
      <Button variant="contained" onClick={handleSubmit}> Submit</Button>
      <Typography
            variant="body1"
            component="span"
            style={{ marginTop: "10px" }}
          >
            already registerd?{" "}
            <span
              style={{ color: "#beb4fb", cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Login
            </span>
          </Typography>
    </Box>
    </Box>
  )
}

export default Register