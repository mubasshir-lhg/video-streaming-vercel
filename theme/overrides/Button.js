// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color:theme.palette.common.white,
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          backgroundColor: theme.palette.grey[100],
          boxShadow: "none",
          "&:hover": {
            backgroundColor: theme.palette.grey[500_16],
          },
        },
        containedPrimary: {
          background: theme.palette.gradients.primary,
          border: `1px solid ${theme.palette.secondary.main} `,
          "&:hover": {
            background: "transparent",
          },
        },
        containedSecondary: {
          background: theme.palette.gradients.secondary,
          border: `1px solid ${theme.palette.secondary.main} `,
          "&:hover": {
            background: "transparent",
          },
        },
        containedInfo: {
          background: theme.palette.gradients.info,
          border: `1px solid ${theme.palette.info.main} `,
          "&:hover": {
            background: "transparent",
          },
        },
        containedPurple: {
          background: theme.palette.gradients.purple,
          border: `1px solid ${theme.palette.purple.main} `,
          "&:hover": {
            background: "transparent",
          },
        },
        containedWarning: {
          background: theme.palette.gradients.warning,
          border: `1px solid ${theme.palette.warning.main} `,
          "&:hover": {
            background: "transparent",
          },
        },
        containedYellow: {
          background: theme.palette.gradients.yellow,
          border: `1px solid ${theme.palette.yellow.main} `,
          "&:hover": {
            background: "transparent",
          },
        },
        containedSuccess: {
          background: theme.palette.gradients.success,
          border: `1px solid ${theme.palette.success.main} `,
          "&:hover": {
            background: "transparent",
          },
        },
        outlinedPrimary: {
          border: `1px solid ${theme.palette.purple.main} `,
          "&:hover": {
            background: theme.palette.gradients.purple,
          },
        },
        outlinedSecondary: {
          border: `1px solid ${theme.palette.common.white} `,
          background: "transparent",
          "&:hover": {
            background: theme.palette.secondary.main,
          },
        },
        outlinedYellow: {
          border: `1px solid ${theme.palette.yellow.main} `,
          "&:hover": {
            background: theme.palette.gradients.yellow,
          },
        },
        outlinedWarning: {
          border: `1px solid ${theme.palette.warning.main} `,
          "&:hover": {
            background: theme.palette.gradients.warning,
          },
        },
        outlinedSuccess: {
          border: `1px solid ${theme.palette.success.main} `,
          "&:hover": {
            background: theme.palette.gradients.success,
          },
        },
        outlinedInfo: {
          border: `1px solid ${theme.palette.info.main} `,
          "&:hover": {
            background: theme.palette.gradients.info,
          },
        },
        outlinedPurple: {
          border: `1px solid ${theme.palette.purple.main} `,
          "&:hover": {
            background: theme.palette.gradients.purple,
          },
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
