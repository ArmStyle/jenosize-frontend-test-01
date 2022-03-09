import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import DescriptionIcon from "@material-ui/icons/Description";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 8,
    border: "#eee 2px solid",
    borderRadius: 5,
    marginTop: 12,
    "& .MuiAvatar-root": {
      marginTop: 8,
      height: 30,
      width: 30,
    },
  },
  avatarPadding: {
    paddingLeft: 12,
  },
  container: {
    display: "flex",
    width: "68%",
  },
  title: {
    fontSize: "0.65rem",
    fontWeight: "bold",
  },
  position: {
    fontSize: "0.65rem",
  },
  report: {
    fontSize: "0.65rem",
    "& .MuiSvgIcon-root": {
      marginRight: 2,
      marginTop: 2,
      height: 12,
      width: 12,
    },
  },
  type: {
    minWidth: 100,
    fontSize: "0.65rem",
    display: "flex",
    alignContent: "center",
    flexWrap: "wrap",
    paddingLeft: 12,
    borderLeft: "#eee 2px solid",
    "& .MuiSvgIcon-root": {
      height: 20,
      width: 20,
    },
  },
  typeText: {
    marginTop: 4,
  },
}));

export default function List({ data }) {
  const classes = useStyles();
  const { name, position, dateType, amount, reportType } = data;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Avatar sizes="small" />
        <div className={classes.avatarPadding}>
          <div className={classes.title}>{name}</div>
          <div className={classes.position}>{position}</div>
          <div className={classes.report}>
            <DescriptionIcon />
            {dateType}
          </div>
        </div>
      </div>
      <div className={classes.type}>
        <span>
          {reportType == "liked" && <ThumbUpAltIcon />}
          {reportType == "comment" && <ChatBubbleIcon />}
          {reportType == "point" && <CardGiftcardIcon />}
          {reportType == "diamond" && <MonetizationOnIcon />}
          &nbsp;&nbsp;
        </span>
        <span className={classes.typeText}>
          {amount} {reportType}
        </span>
      </div>
    </div>
  );
}
