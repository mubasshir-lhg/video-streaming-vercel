
import React, { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { Grid, Box, TextField, Button } from "@mui/material";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import logo from "../../assets/Images/logo/Teachmetoo Brandmark Full Color .png";
import Image from "next/image";
import Link from "next/link";

const Label = ({ children }) => (
  <Box sx={{ typography: { xs: "subtitle1", md: "subtitle2" } }}>
    {children}
  </Box>
);
const SignupPage = () => {
  const router = useRouter();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setState({
      ...state,
      [name]: value,
    });
  };
  const signupHandler = () => {
    toast.success("user registered successfully");
    router.push('/home')
  };

  return (
    <Grid container justifyContent="center" mt={15}>
      <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
        <BoxContainer bgColor="primary.light">
          <Box sx={{ typography: "h4", textAlign: "center" }}>
            <Image
              alt="logo"
              src={logo}
              width={40}
              height={40}
              quality={100}
              objectFit="cover"
            />
          </Box>
          <Box sx={{ typography: "h4", textAlign: "center" }}>Signup</Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Label>First Name</Label>
              <TextField
                name="firstName"
                value={state.firstName}
                type="text"
                size="small"
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <Label>Last Name</Label>
              <TextField
                name="lastName"
                value={state.lastName}
                type="text"
                size="small"
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <Label>Email</Label>
              <TextField
                name="email"
                value={state.email}
                type="text"
                size="small"
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <Label>Password</Label>
              <TextField
                name="password"
                value={state.password}
                type="password"
                size="small"
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <Label>Confirm Password</Label>
              <TextField
                name="confirmPassword"
                value={state.confirmPassword}
                type="password"
                size="small"
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="warning"
                fullWidth
                onClick={signupHandler}
              >
                Signup
              </Button>
            </Grid>
            <Grid item xs={12} textAlign="right">
              <Link href="/auth/login">already have account? login</Link>
            </Grid>
          </Grid>
        </BoxContainer>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default SignupPage;