// ----------------------------------------------------------------------

export default function Table(theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '17px',
          letterSpacing:'1.2px',
          borderBottom:'none'
        },
      }
    }
  };
}
