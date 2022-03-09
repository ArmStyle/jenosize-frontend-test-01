import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PublishIcon from "@material-ui/icons/Publish";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 16px",
    borderTop: "#eee 2px solid",
  },
}));

const Content = ({ date, type }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <span>{moment(date).format("DD MMMM yyyy")}</span>
        {type == 1 && (
          <>
            <span> - {moment(date).add(7, "days").format("DD MMMM yyyy")}</span>
          </>
        )}
      </div>
      <div>
        <PublishIcon />
      </div>
    </div>
  );
};

export default Content;
