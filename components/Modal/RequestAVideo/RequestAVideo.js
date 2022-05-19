import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import user1 from "../../../assets/Images/user1.jpg";
import { Button, IconButton, TextField } from "@mui/material";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadiusSm,
    boxShadow: 24,
    padding: "20px 40px",
  },
  box: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  closeIcon:{
      position:'absolute',
      top:5,
      right:5,
  }
}));

export const RequestModal = ({ handleClose, open }) => {
  const classes = useStyles();
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.modal}>
            <Box sx={{ typography: "subtitle1" }} className={classes.box}>
              <VideoCallOutlinedIcon fontSize="large" /> Request a video
            </Box>
            <Box className={classes.box} mt={3} mb={2}>
              <Image
                width={50}
                height={50}
                src={user1}
                alt="img"
                objectFit="cover"
                className="bar-img"
              />
              <TextField
                variant="standard"
                placeholder="Add Comment"
                fullWidth
              />
            </Box>
            <Box className={classes.box} sx={{ justifyContent: "flex-end" }} mb={2}>
              <Button variant="outlined" color="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" color="info" onClick={handleClose}>
                Submit
              </Button>
            </Box>
            <IconButton onClick={handleClose} className={classes.closeIcon}>
                <CloseIcon/>
            </IconButton>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
