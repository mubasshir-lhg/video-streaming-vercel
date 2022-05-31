// ----------------------------------------------------------------------

export default function Input(theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "#fff",
          size: 'small',
          backgroundColor:theme.palette.primary.main,
          borderRadius:theme.shape.borderRadiusMd,
          width:"100%",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": { color: theme.palette.text.disabled },
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: theme.palette.grey[500_56],
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: theme.palette.secondary.main,
          padding: "5px",
          borderRadius: theme.shape.borderRadius,
        },
        icon: {
          color: "#fff",
        },
        outlined:{
          backgroundColor: theme.palette.primary.main,
          padding: "16px",
          borderRadius: theme.shape.borderRadius,
          "&.Mui-focused":{
            borderColor:'none'
          }
        }
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z8,
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          size: 'small',
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.primary.main,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
          },
          "&.MuiFilledInput-inputSizeSmall":{
            size:'small',
          }
        },
        underline: {
          "&.MuiFilledInput-underline": {
            disableUnderline: true,
          }
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius:theme.shape.borderRadiusSm,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[500_32],
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
  };
}
