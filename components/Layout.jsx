import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "calc(100% - 60px)",
    position: "relative",
  },
  page_row_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  playground: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
    minHeight: "calc(100% - 60px)",
  },
  playgroundBackground: {
    background: theme.palette.background.default,
  },
}));

export default function Layout(props) {
  const { children, showHeader = true } = props;
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Header />
        <div className={classes.page_row_container}>
          <div
            className={clsx(classes.playground, classes.playgroundBackground)}
          >
            <div>{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
