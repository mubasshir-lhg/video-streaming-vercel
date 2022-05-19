import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------
// background: linear-gradient(75deg, rgb(0 27 66 / 70%) 0%, rgb(14 28 48) 100%);

export default function Backdrop(theme) {
  const varLow = alpha(theme.palette.primary.darker, 0.80);
  const varHigh = alpha(theme.palette.primary.darker, 1);

  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            `rgb(0,27,66)`,
            `-moz-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
            `-webkit-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
            `linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`
          ],
          '&.MuiBackdrop-invisible': {
            background: 'transparent'
          }
        }
      }
    }
  };
}
