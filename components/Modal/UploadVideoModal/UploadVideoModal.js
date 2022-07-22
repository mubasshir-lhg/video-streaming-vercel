import React, { useCallback } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { makeStyles } from "@mui/styles";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/router";

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
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  box: {
    borderRadius: theme.shape.borderRadiusSm,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "80px 0",
  },
  closeIcon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
}));

export const UploadVideoModal = ({ handleClose, open }) => {
  const classes = useStyles();
  const router = useRouter();
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles);
      {
        router.push({
          pathname: "/home/uploadVideo/splitChapters",
          query: { data: JSON.stringify(acceptedFiles)},
        });
      }
      handleClose();
    },
    [router]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
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
            <Box
              sx={{ typography: "subtitle1" }}
              className={`${classes.box} CustomeBorder`}
            >
              <Box {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <Typography variant="subtitle1">
                    Drop the files here ...
                  </Typography>
                ) : (
                  <Typography variant="subtitle1">
                    Drag n drop some files here, or click to select files
                  </Typography>
                )}
              </Box>
            </Box>
            <IconButton onClick={handleClose} className={classes.closeIcon}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
