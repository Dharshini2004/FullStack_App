import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";


export default function Login() {
  let name = useRef(null)
  let password = useRef(null)
  const [error, setError] = React.useState({ name: false, password: false });
  const navigate = useNavigate();
  // const handleSubmit=(e)=>{
  //   e.preventdefault();
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert('Form submission prevented!');
    console.log(name.current.value)
    console.log(password.current.value)
    if (name.current.value && password.current.value) {
      setError((prev) => {
        return { ...prev, name: false, password: false }
      })
      console.log(name.current.value)
      console.log(password.current.value)

    }
    else {
      console.log("Please fill all field")
      if (!name.current.value && !password.current.value) {
        setError((prev) => {
          return { ...prev, name: true, password: true };
        })
      }
      else if (!name.current.value) {
        setError((prev) => {
          return { ...prev, name: true }
        })
      }
      else if (!password.current.value) {
        setError((prev) => {
          return { ...prev, password: true }
        })
      }


    }
  }
  return (
    <Box component="form">

      <Box sx={{
        '& > :not(style)': { m: 2 },
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexDirection: "column"
      }}>
        <Typography color={"black"} fontSize={"10px"}>LOGIN</Typography>
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
          {error.name && (<Typography color={"red"} fontSize={"8px"}>
            Fill the name
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
          {error.password && (<Typography color={"red"} fontSize={"8px"}>
            Fill the password
          </Typography>)}
        </Box>
        <Button variant="contained" onClick={handleSubmit}> Submit</Button>
        <Typography
            variant="body1"
            component="span"
            style={{ marginTop: "10px" }}
          >
            Not registered yet?{" "}
            <span
              style={{ color: "#beb4fb", cursor: "pointer" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Create an Account
            </span>
          </Typography>
      </Box>
      
    </Box>
  );
}
// import React from 'react'

// function Login() {
//   return (
//     <div>Login</div>

//   )
// }

// export default Login