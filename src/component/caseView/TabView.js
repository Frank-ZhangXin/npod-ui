import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import VerticalView1 from "./VerticalView1";
import VerticalView2 from "./VerticalView2";
import VerticalView3 from "./VerticalView3";
import VerticalView4 from "./VerticalView4";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`case-tabpanel-${index}`}
      aria-labelledby={`case-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

function a11yProps(index) {
  return {
    id: `case-tab-${index}`,
    "aria-controls": `case-tabpanel-${index}`,
  };
}

export default function DisabledTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="case tabs"
          indicatorColor="primary"
          className={classes.tabs}
        >
          <Tab label="DONNOR SUMMARY" {...a11yProps(0)} />
          <Tab label="TISSUE QUALITY" {...a11yProps(1)} />
          <Tab label="FUNCTIONAL ASSAY" {...a11yProps(2)} />
          <Tab label="HISTOLOGY" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <VerticalView1 />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <VerticalView2 />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <VerticalView3 />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <VerticalView4 />
        </TabPanel>
      </Paper>
    </div>
  );
}
