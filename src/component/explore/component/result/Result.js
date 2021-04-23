import React, { setState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import testData from "../../../../data/test_case_data_0407.json";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import Search from "./component/Search";
import FetchRawData from "./component/FetchRawData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    //flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  button: {
    marginBottom: theme.spacing(2),
  },
  paper: {
    textAlign: "center",
    // color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      cursor: "pointer",
    },
  },
}));

function Result(props) {
  const classes = useStyles();
  return (
    <div>
      <FetchRawData />
      <Typography variant="h3">SEARCH REASULT</Typography>
      <div style={{ width: "100%" }}>
        <Box display="flex" justifyContent="flex-end">
          <Box>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Download All
            </Button>
          </Box>
        </Box>
      </div>
      {/* Show search result */}
      <Search />
    </div>
  );
}

// Subscribe
const mapStateToProps = (state) => {
  return {
    // Raw Data
    rawData: state.rawData,

    // Filtered Data
    filteredData: state.filteredData,
  };
};

export default connect(mapStateToProps)(Result);
