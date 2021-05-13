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

function LabTestResults(props) {
  const classes = useStyles();

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "value", headerName: "Value", width: 200 },
  ];

  const rows = [
    {
      id: 1,
      name: "Auto Antibody Status",
      value:
        props.currentCase.autoantibody_results === null
          ? "Unavailable"
          : props.currentCase.autoantibody_results,
    }, // need mockup
    {
      id: 2,
      name: "GADA",
      value: "Unavailable",
    }, // need mockup
    {
      id: 3,
      name: "IA2A",
      value: "Unavailable",
    }, // need mockup
    {
      id: 4,
      name: "mIAA",
      value: "Unavailable",
    }, // need mockup
    {
      id: 5,
      name: "ZnT8A",
      value: "Unavailable",
    }, // need mockup
    {
      id: 6,
      name: "C-PEPTIDE (ng/mL)",
      value:
        props.currentCase.C_peptide === null
          ? "Unavailable"
          : props.currentCase.C_peptide,
    }, // need mockup
    {
      id: 7,
      name: "HbA1C Hospital (%)",
      value:
        props.currentCase.HbA1c === null
          ? "Unavailable"
          : props.currentCase.HbA1c,
    }, // need mockup
    {
      id: 8,
      name: "HbA1C Lab (%)",
      value:
        props.currentCase.HbA1c === null
          ? "Unavailable"
          : props.currentCase.HbA1c,
    }, // need mockup
    {
      id: 9,
      name: "Serologies",
      value:
        props.currentCase.serologies === null
          ? "Unavailable"
          : props.currentCase.serologies,
    }, // need mockup
    {
      id: 10,
      name: "Total Pancrea Weight (g)",
      value:
        props.currentCase.pancreas_weight_grams === null
          ? "Unavailable"
          : props.currentCase.pancreas_weight_grams,
    }, // need mockup
    {
      id: 11,
      name: "Pancrea Head (g)",
      value:
        props.currentCase.pancreas_head_grams === null
          ? "Unavailable"
          : props.currentCase.pancreas_head_grams,
    }, // need mockup
    {
      id: 12,
      name: "Pancrea Body (g)",
      value:
        props.currentCase.pancreas_body_grams === null
          ? "Unavailable"
          : props.currentCase.pancreas_body_grams,
    }, // need mockup
    {
      id: 13,
      name: "Pancrea Tail (g)",
      value:
        props.currentCase.pancreas_tail_grams === null
          ? "Unavailable"
          : props.currentCase.pancreas_tail_grams,
    }, // need mockup
  ];

  return (
    <div>
      <div>
        <Typography variant="h5" className={classes.title}>
          LAB RESULTS
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

export default connect(mapStateToProps, null)(LabTestResults);
