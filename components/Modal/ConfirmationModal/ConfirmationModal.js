import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadiusSm,
    boxShadow: 24,
    textAlign: "center",
    padding: "20px 40px",
  },
  box: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "Center",
    marginTop: "20px",
  },
}));

export const ConfirmationModal = ({ handleClose, open, Confirm }) => {
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
            <Box mt={5}>
              <Typography variant="subtitle1">
                Are you sure about spliting these chapters?
              </Typography>
            </Box>
            <Box className={classes.box} mb={2}>
              <Button variant="outlined" color="purple" onClick={handleClose}>
                Go Back
              </Button>
              <Button variant="contained" color="purple" onClick={Confirm}>
                Confirm
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
