import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(20),
    },
  },
  paperContainer: {
    textAlign: "center",
    padding: "1rem",
  },
  row: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: "1rem",
    fontWeight: 500,
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: "1.rem",
    fontWeight: 500,
    marginTop: 4,
    marginBottom: 24,
  },
  amount: {
    fontSize: "2.25rem",
    fontWeight: 600,
  },
  type: {
    color: theme.palette.text.label,
  },
}));

export default function SimplePaper({ icon, title, amount, type }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paperContainer} elevation={1}>
        <div className={classes.row}>
          <div className={classes.icon}>{icon}</div>&nbsp;&nbsp;
          <div className={classes.title}>{title}</div>
        </div>
        <div className={classes.amount}>{amount}</div>
        <div className={classes.type}>{type}</div>
      </Paper>
    </div>
  );
}
