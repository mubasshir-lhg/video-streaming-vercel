// ----------------------------------------------------------------------

export default function Drawer(theme) {
  return {
    MuiDrawer: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        paper: {
          backgroundColor: theme.palette.secondary.main,
          color: "#fff",
          borderRadius: "0 40px 40px 0",
          zIndex: 1205,
          border:'none',
          boxShadow:theme.customShadows.z8
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius:'40px 0 0 40px',
          position:'relative',
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
          "&:focus::before":{
            content:'""',
            width: 0,
            height: 0,
            borderTop: '25px solid transparent',
            borderRight: `30px solid ${theme.palette.primary.main}`,
            borderBottom:' 25px solid transparent',
            position:'absolute',
            top:-3,
            right:0,
            zIndex:-1,
          },
          "&:focus::after":{
            content:'""',
            width: 0,
            height: 0,
            borderTop: '25px solid transparent',
            borderRight: `30px solid ${theme.palette.primary.main}`,
            borderBottom:' 25px solid transparent',
            position:'absolute',
            top:3,
            right:0,
            zIndex:-1,
            
          }
        },
      },
      selected: {}
    },
  };
}
