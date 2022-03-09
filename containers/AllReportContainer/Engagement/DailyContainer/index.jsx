import React from "react";
import Grid from "@material-ui/core/Grid";
import DailyCard from "../DailyCard";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

export default function SimplePaper() {
  return (
    <>
      <Grid container>
        <Grid item xs={6} md={3}>
          <DailyCard
            icon={<ThumbUpAltIcon />}
            title={"Like"}
            amount={34}
            type={"Likes"}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <DailyCard
            icon={<ChatBubbleIcon />}
            title={"Comment"}
            amount={56}
            type={"Comments"}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <DailyCard
            icon={<CardGiftcardIcon />}
            title={"Point"}
            amount={450}
            type={"Point"}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <DailyCard
            icon={<MonetizationOnIcon />}
            title={"Diamond"}
            amount={40}
            type={"Diamond"}
          />
        </Grid>
      </Grid>
    </>
  );
}
