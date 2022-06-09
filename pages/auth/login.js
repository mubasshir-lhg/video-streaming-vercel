import React from "react";
import { Grid,Box,TextField, Button } from "@mui/material";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Link from "next/link";

const Label = ({ children }) => (
    <Box sx={{ pb: 1, typography: {xs:"subtitle1",md:"subtitle2"} }}>{children}</Box>
  );
const LoginPage = () => {
  return (
    <Grid container justifyContent="center" mt={6}>
      <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
        <BoxContainer>
          <Box sx={{typography:"h4",textAlign:"center"}}><LockOpenIcon color="warning"/></Box>
          <Box sx={{typography:"h4",textAlign:"center"}}>Login</Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Label>Email</Label>
              <TextField name="title" type="text"/>
            </Grid>
            <Grid item xs={12}>
              <Label>Password</Label>
              <TextField name="password" type="password" />
            </Grid>
            <Grid item xs={12}>
             <Button variant="contained" color="warning" fullWidth >Login</Button>
            </Grid>
            <Grid item xs={12} textAlign="right">
                <Link href="/auth/signup">don&apos;t have account? Signup</Link>
            </Grid>
          </Grid>
        </BoxContainer>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
