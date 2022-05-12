import React from 'react'
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import { useTheme } from "@mui/styles";
const ContainedButton = () => {
    const { palette } = useTheme();
  return (
      <Button sx={{
          background: palette.gradients.purple,
          "&:hover": {
              background: "transparent",
              border: `1px solid ${palette.purple.main} ` 
          }
        }} variant='contained'  >
            contained one
        </Button>
  )
}

export default ContainedButton