import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#08bf3c",
    },
  },
  typography: {
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontSize: 16,
    h3: {
      fontSize: "2rem",
      lineHeight: 1.6,
    },
    caption: {
      fontSize: "4rem",
      lineHeight: 2,
      textAlign: "center",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: 14,
        fontWeight: 400,
        textTransform: "uppercase",
        padding: "8px 24px",
        borderRadius: 4,
      },
      contained: {
        boxShadow: "none",
      },
      containedPrimary: {
        color: "#ffffff",
        backgroundColor: "#08bf3c",
      },
    },
  },
});
