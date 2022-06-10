import React, { useState } from "react";
import {
  Grid,
  TextField,
  Box,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";


const LabelImg = styled("label")`
  position: absolute;
  bottom: 10px;
  left: 60px;
  cursor: pointer;
`;

const Label = ({ children }) => (
  <Box sx={{ typography: { xs: "subtitle1", md: "subtitle2" } }}>
    {children}
  </Box>
);

const Profile = () => {
  const [profileImage, setProfileImage] = useState("");
  const imgHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <Grid container mt={6}>
      <Grid item xs={12}>
        <Typography variant="h6">Profile setting</Typography>
      </Grid>
      <Grid item xs={12} sm={5} md={4} lg={3} xl={2} p={3}>
        <Box sx={{ borderRight:{xs:"none",sm: "1px solid #fff"}, position: "relative" }}>
          <Avatar
            src={profileImage || "/user1.jpg"}
            alt="user"
            sx={{ width: 150, height: 150 }}
          />
          <LabelImg htmlFor="upload-image">
            <PhotoCameraIcon />
          </LabelImg>
        </Box>

        <input
          type="file"
          name="upload image"
          id="upload-image"
          accept="image/*"
          style={{ display: "none" }}
          onChange={imgHandler}
        />
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={6} container spacing={2}>
        <Grid item xs={6}>
          <Label>Name</Label>
          <TextField name="name" />
        </Grid>
        <Grid item xs={6}>
          <Label>Email</Label>
          <TextField name="email" />
        </Grid>
        <Grid item xs={6}>
          <Label>Contact</Label>
          <TextField name="contact" type="text" />
        </Grid>
        <Grid item xs={6}>
          <Label>Current Password</Label>
          <TextField name="password" type="password" />
        </Grid>
        <Grid item xs={6}>
          <Label>New Password</Label>
          <TextField name="newPassword" type="password" />
        </Grid>
        <Grid item xs={6}>
          <Label>Confirm Password</Label>
          <TextField name="confirmPassword" type="password" />
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" color="purple" fullWidth>
            Cancel
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="purple" fullWidth>
            Update
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
