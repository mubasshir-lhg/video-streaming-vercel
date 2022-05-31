// ----------------------------------------------------------------------

export default function Calender(theme) {
  return {
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.secondary.main,
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        },
      },
    },
  };
}
