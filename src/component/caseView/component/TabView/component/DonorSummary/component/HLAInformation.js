import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import donor_types from "../../../../../../../data/donor_types.json";
import { makeStyles } from "@material-ui/core/styles";

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
  },
}));

function HLAInformation(props) {
  const classes = useStyles();

  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "value", headerName: "Value", width: 300 },
  ];

  const rows = [
    {
      id: 1,
      name: "Transplant HLA",
      value:
        props.currentCase.HLA_transplant === null
          ? "Unavailable"
          : props.currentCase.HLA_transplant,
    }, // need mockup
    {
      id: 2,
      name: "Hi-Res HLA",
      value: "",
    }, // need mockup
    {
      id: 3,
      name: "A1",
      value: "Unavailable",
    }, // need mockup
    {
      id: 4,
      name: "A2",
      value: "Unavailable",
    }, // need mockup
    {
      id: 5,
      name: "B1",
      value: "Unavailable",
    }, // need mockup
    {
      id: 6,
      name: "B2",
      value: "Unavailable",
    }, // need mockup
    {
      id: 7,
      name: "C1",
      value: "Unavailable",
    }, // need mockup
    {
      id: 8,
      name: "C2",
      value: "Unavailable",
    }, // need mockup
    {
      id: 9,
      name: "DRB1",
      value: "Unavailable",
    }, // need mockup
    {
      id: 10,
      name: "DRB2",
      value: "Unavailable",
    }, // need mockup
    {
      id: 11,
      name: "DQA1",
      value: "Unavailable",
    }, // need mockup
    {
      id: 12,
      name: "DQ2",
      value: "Unavailable",
    }, // need mockup
    {
      id: 13,
      name: "DPA",
      value: "Unavailable",
    }, // need mockup
  ];

  return (
    <div>
      <div>
        <Typography variant="h5" className={classes.title}>
          HLA INFORMATION
        </Typography>
      </div>
      <div style={{ height: "650px", width: "100%" }}>
        <DataGrid rows={rows} columns={columns} autoPageSize={true} />
      </div>
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

export default connect(mapStateToProps, null)(HLAInformation);
