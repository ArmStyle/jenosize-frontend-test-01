import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../MenuTitle";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ListIcon from "@material-ui/icons/List";
const MenuDate = ({ value, setValue, display, setDisplay }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Paper
        square
        style={{
          margin: 8,
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
        elevation={0}
      >
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Daily" style={{ borderBottom: "#eee 2px solid" }} />
          <Tab label="Weekly" style={{ borderBottom: "#eee 2px solid" }} />
          <Tab label="Monthly" style={{ borderBottom: "#eee 2px solid" }} />
        </Tabs>
        <div>
          <EqualizerIcon
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              margin: 8,
              color: display == "chart" ? "#0037ff" : "",
            }}
            onClick={() => setDisplay("chart")}
          />
          <ListIcon
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              margin: 8,
              color: display == "list" ? "#0037ff" : "",
            }}
            onClick={() => setDisplay("list")}
          />
        </div>
      </Paper>
    </>
  );
};

export default MenuDate;
