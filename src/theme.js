import { createTheme } from "@material-ui/core/styles";

const APP_PRIMARY = "#0037ff";
const BORDER_RADIUS = 8;

const global = {
  "@global": {
    body: {
      height: "100vh !important",
      overflowY: "hidden",
    },
    p: {
      margin: 0,
      padding: 0,
    },
    button: {
      outline: "none",
    },
    a: {
      cursor: "pointer",
      textDecoration: "none",
    },
    td: {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    type: "light",
    text: {
      label: "rgb(113, 113, 113)",
    },
    primary: {
      main: APP_PRIMARY,
    },
    secondary: {
      main: "#333",
    },
  },
  overrides: {
    MuiCssBaseline: global,
    MuiTab: {
      root: {
        fontSize: "0.875rem",
        textTransform: "none !important",
        minHeight: "0px",
      },
    },
    MuiTabs: {
      fixed: {
        height: "fit-content",
      },
    },
  },
});
