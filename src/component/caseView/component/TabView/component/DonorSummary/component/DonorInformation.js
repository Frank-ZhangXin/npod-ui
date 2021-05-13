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

function DataGridDemo(props) {
  const classes = useStyles();
  const donorType = donor_types.filter(
    (d) => d.donor_type_id === props.currentCase.donor_type_id
  )[0].name;

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "value", headerName: "Value", width: 150 },
  ];

  const rows = [
    {
      id: 1,
      name: "Donor Type",
      value: donorType === null ? "Unavailable" : donorType,
    },
    {
      id: 2,
      name: "Diabetes Duration (years)",
      value:
        props.currentCase.diabetes_hx_years === null
          ? "Unavailable"
          : props.currentCase.diabetes_hx_years,
    },
    {
      id: 3,
      name: "Age",
      value:
        props.currentCase.age_years === null
          ? "Unavailable"
          : props.currentCase.age_years,
    },
    {
      id: 4,
      name: "Gestational Age (weeks)",
      value:
        props.currentCase.gestational_age_weeks === null
          ? "Unavailable"
          : props.currentCase.gestational_age_weeks,
    }, // need mockup
    { id: 5, name: "Sex", value: props.currentCase.sex },
    { id: 6, name: "Race", value: props.currentCase.race },
    {
      id: 7,
      name: "Height (cm)",
      value:
        props.currentCase.height_cm === null
          ? "Unavailable"
          : props.currentCase.height_cm,
    }, // need mockup
    {
      id: 8,
      name: "Weight (kg)",
      value:
        props.currentCase.weight_kg === null
          ? "Unavailable"
          : props.currentCase.weight_kg,
    }, // need mockup
    {
      id: 9,
      name: "BMI",
      value:
        props.currentCase.BMI === null ? "Unavailable" : props.currentCase.BMI,
    },
    {
      id: 10,
      name: "Cause of Death ID",
      value:
        props.currentCase.cause_of_death_id === null
          ? "Unavailable"
          : props.currentCase.cause_of_death_id,
    }, // need mockup
    {
      id: 11,
      name: "ABO Group",
      value:
        props.currentCase.ABO_blood_type === null
          ? "Unavailable"
          : props.currentCase.ABO_blood_type,
    }, // need mockup
  ];

  return (
    <div>
      <div>
        <Typography variant="h5" className={classes.title}>
          DONOR INFORMATION
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

export default connect(mapStateToProps, null)(DataGridDemo);
