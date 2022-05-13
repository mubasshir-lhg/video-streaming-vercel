// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiIconButton:{
      styleOverrides:{
        root:{
          color:'#fff'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none'
          }
        },
        sizeLarge: {
          height: 48
        },
        containedInherit: {
          backgroundColor: theme.palette.grey[100],
          color: theme.palette.grey[800],
          boxShadow:'none',
          '&:hover': {
            backgroundColor: theme.palette.grey[500_16]
          }
        },
        containedPrimary: {
          boxShadow: theme.customShadows.purple,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary
        },
        containedInfo: {
          backgroundColor: theme.palette.grey[50]
        },
        containedPurple: {
          background: theme.palette.gradients.purple,
          "&:hover": {
            background: "transparent",
            border: `1px solid ${theme.palette.purple.main} ` 
          }
        },
        containedWarning: {
          background: theme.palette.gradients.warning,
          "&:hover": {
            background: "transparent",
            border: `1px solid ${theme.palette.warning.main} ` 
          }
        },
        outlinedPrimary: {
          border: `1px solid ${theme.palette.purple.main} ` ,
          "&:hover": {
            background: theme.palette.gradients.purple, 
          }
        },
        outlinedYellow: {
          border: `1px solid ${theme.palette.yellow.main} ` ,
          "&:hover": {
            background: theme.palette.gradients.yellow, 
          }
        },
        outlinedWarning: {
          border: `1px solid ${theme.palette.warning.main} ` ,
          "&:hover": {
            background: theme.palette.gradients.warning, 
          }
        },
        outlinedSuccess: {
          border: `1px solid ${theme.palette.success.main} ` ,
          "&:hover": {
            background: theme.palette.gradients.success, 
          }
        },
        outlinedInfo: {
          border: `1px solid ${theme.palette.info.main} ` ,
          "&:hover": {
            background: theme.palette.gradients.info, 
          }
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        }
      }
    }
  };
}
