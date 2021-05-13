import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import donor_types from "../../../../../../data/donor_types.json";
import DonorInformation from "./component/DonorInformation";
import LabTestResults from "./component/LabTestResults";
import HLAInformation from "./component/HLAInformation";
import Comment from "./component/Comment";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: theme.spacing(2),
  },
  content: {
    paddingTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    height: "100%",
  },
}));

function DonorSummary(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2} justify={"center"} alignItems={"stretch"}>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}>
            <DonorInformation />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}>
            <LabTestResults />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}>
            <HLAInformation />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}>
            <Comment />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

// Subscribe
const mapStateToProps = (state) => {
  return {
    // Filtered Data
    currentCase: state.currentCase,
  };
};

export default connect(mapStateToProps, null)(DonorSummary);
