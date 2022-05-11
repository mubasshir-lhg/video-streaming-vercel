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
          color: theme.palette.common.black,
          backgroundColor: theme.palette.common.white,
          boxShadow: theme.customShadows.z8,
          '&:hover': {
          boxShadow: theme.customShadows.z1,
          backgroundColor: theme.palette.grey[50]
          }
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary
        },
        containedInfo: {
          backgroundColor: theme.palette.grey[50]
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
