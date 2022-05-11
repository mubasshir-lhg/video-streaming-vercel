import { Box, Grid,Paper,Typography,ListItemIcon } from "@mui/material";
import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useTheme } from "@mui/styles";
const ChapterCard = ({chapterNum,chapterDuration}) => {
    const { shape } = useTheme();
  return (
    <Grid item md={6} xs={12}>
        <Paper variant="outlined" sx={{
            bgcolor: "primary.main",
            borderRadius:"9px"
        }} >
            <Box sx={{
                backgroundColor:"secondary.main",
                borderTopRightRadius:"9px !important",
                borderTopLeftRadius:"9px !important",
                }} >
                <ListItem
                    disableGutters
                    secondaryAction={
                    <ListItemIcon>
                        <IconButton aria-label="edit">
                            <ModeEditOutlinedIcon />
                        </IconButton>
                        <IconButton aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </ListItemIcon>
            }>
                    <ListItemText primary={`chapter ${chapterNum}`} sx={{
                        p:2,
                        pl:2
                    }} />
                </ListItem>
            </Box>

            <Box  sx={{
                        m:3,
                        backgroundColor:"primary.dark",
                        textAlign: 'center',
                        p:3,
                        borderRadius: shape.borderRadius,  
              }}>
                <Typography variant ='subtitle1' 
                        sx={{
                            pb:4
                        }}
                    >Duration</Typography>
                        
                    <Button variant="contained" color='info' sx={{
                        width:'100%',
                        backgroundColor:'info.main',
                        color:'white'
                    }}>{chapterDuration} Minutes</Button>
            </Box>
        </Paper>
    </Grid>
  )
}

export default ChapterCard