import React, { useState } from "react";
import { useRouter } from "next/router";
import { Grid, Box, TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import logo from "../../assets/Images/logo/Teachmetoo Brandmark Full Color .png";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Image from "next/image";
import Link from "next/link";

const Label = ({ children }) => (
  <Box sx={{ typography: { xs: "subtitle1", md: "subtitle2" } }}>
    {children}
  </Box>
);

const LoginPage = () => {
  const router=useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    if (email && password) {
      toast.success("login successful");
      router.push('/home')
    } else {
      toast.error("required name and email");
    }
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
          <Box sx={{ typography: "h4", textAlign: "center" }}>Login</Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Label>Email</Label>
              <TextField
                name="email"
                type="text"
                size="small"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Label>Password</Label>
              <TextField
                name="password"
                type="password"
                size="small"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="warning"
                fullWidth
                onClick={loginHandler}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="info"
                fullWidth
                onClick={loginHandler}
              >
                Login With Google
              </Button>
            </Grid>
            <Grid item xs={12} textAlign="right">
              <Link href="/auth/signup">don&apos;t have account? Signup</Link>
            </Grid>
          </Grid>
        </BoxContainer>
      </Grid>
      <ToastContainer autoClose={1000} />
    </Grid>
  );
};

export default LoginPage;
