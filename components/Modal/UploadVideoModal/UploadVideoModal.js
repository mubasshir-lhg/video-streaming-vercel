import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

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
    textAlign: "center",
    padding: "40px 40px",
  },
  box:{
    borderRadius: theme.shape.borderRadiusSm,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:'80px 0',
  }
}));

export const UploadVideoModal = ({ handleClose, open }) => {
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
            <Box sx={{ typography: "subtitle1" }} className={`${classes.box} CustomeBorder`}>
              <IconButton>
                <UploadIcon />
              </IconButton>
              Upload a Video
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};