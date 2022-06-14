import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Grid, Box, TextField, Button } from "@mui/material";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import logo from "../../assets/Images/logo/Teachmetoo Brandmark Full Color .png";

const Label = ({ children }) => (
  <Box sx={{ typography: { xs: "subtitle1", md: "subtitle2" } }}>
    {children}
  </Box>
);
const SignupPage = () => {
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
              <Label>Name</Label>
              <TextField name="name" type="text" size="small" />
            </Grid>
            <Grid item xs={12}>
              <Label>Email</Label>
              <TextField name="title" type="text" size="small" />
            </Grid>
            <Grid item xs={12}>
              <Label>Password</Label>
              <TextField name="password" type="password" size="small" />
            </Grid>
            <Grid item xs={12}>
              <Label>Confirm Password</Label>
              <TextField name="confirm-password" type="password" size="small" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="warning" fullWidth>
                Signup
              </Button>
            </Grid>
            <Grid item xs={12} textAlign="right">
              <Link href="/auth/login">already have account? login</Link>
            </Grid>
          </Grid>
        </BoxContainer>
      </Grid>
    </Grid>
  );
};

export default SignupPage;
