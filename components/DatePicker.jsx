import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 8px 8px 8px",
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function DatePickers({ type, date, setDate }) {
  const classes = useStyles();
  // const [date, setDate] = React.useState(moment().format("yyyy-MM-DD"));
  const [date2, setDate2] = React.useState(
    moment(date).add(7, "days").format("yyyy-MM-DD")
  );

  React.useEffect(() => {
    setDate2(moment(date).add(7, "days").format("yyyy-MM-DD"));
  }, [date]);

  return (
    <>
      {type == 0 && (
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </form>
      )}
      {type == 1 && (
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <TextField
            id="date"
            type="date"
            value={date2}
            onChange={(e) => setDate2(e.target.value)}
            disabled
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </form>
      )}
      {type == 2 && (
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </form>
      )}
    </>
  );
}
