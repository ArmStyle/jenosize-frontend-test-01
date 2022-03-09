import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    "& > *": {
      width: "100%",
      margin: 4,
      marginBottom: 12,
      padding: 1,
      fontSize: "0.725rem",
    },
    "& .MuiChip-outlined .MuiChip-icon ": {
      fontSize: "1rem",
    },
    "& .MuiChip-iconColorPrimary": {
      fontSize: "1rem",
    },
  },
}));

const MenuReports = ({ report, setReport }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Chip
        variant={report == "like" ? "default" : "outlined"}
        color="primary"
        label="Like"
        icon={<ThumbUpAltIcon />}
        onClick={() => setReport("like")}
      />
      <Chip
        variant={report == "comment" ? "default" : "outlined"}
        color="primary"
        label="Comment"
        icon={<ChatBubbleIcon />}
        onClick={() => setReport("comment")}
      />
      <Chip
        variant={report == "point" ? "default" : "outlined"}
        color="primary"
        label="Point"
        icon={<CardGiftcardIcon />}
        onClick={() => setReport("point")}
      />
      <Chip
        variant={report == "diamond" ? "default" : "outlined"}
        color="primary"
        label="Diamond"
        icon={<MonetizationOnIcon />}
        onClick={() => setReport("diamond")}
      />
    </div>
  );
};

export default MenuReports;
