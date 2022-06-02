// ----------------------------------------------------------------------

export default function AppBar(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: "0px",
        },
      },
    },
  };
}
