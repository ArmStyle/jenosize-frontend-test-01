import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CreateIcon from "@material-ui/icons/Create";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SendIcon from "@material-ui/icons/Send";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SettingsIcon from "@material-ui/icons/Settings";

import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    textAlign: "center",
    "& .MuiTab-root": {
      fontSize: "0.725rem !important",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "1rem !important",
    },
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const router = useRouter();

  const handleRoute = (value) => {
    router.push(`${value}`);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={router.pathname}
        variant="fullWidth"
        textColor="primary"
        aria-label="icon label tabs example"
      >
        <Tab
          icon={<CreateIcon />}
          label="Write"
          value={"/write"}
          onClick={() => handleRoute("/write")}
        />
        <Tab
          icon={<CheckCircleIcon />}
          label="Approval"
          value={"/approval"}
          onClick={() => handleRoute("/approval")}
        />
        <Tab
          icon={<SendIcon />}
          label="Report"
          value={"/report"}
          onClick={() => handleRoute("/report")}
        />
        <Tab
          icon={<EqualizerIcon />}
          label="Statistic"
          value={"/statistic"}
          onClick={() => handleRoute("/statistic?action=engagement")}
        />
        <Tab
          icon={<SettingsIcon />}
          label="Setting"
          value={"/setting"}
          onClick={() => handleRoute("/setting")}
        />
      </Tabs>
    </Paper>
  );
}
