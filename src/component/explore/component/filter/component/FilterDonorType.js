import React, { setState } from "react";
import Select from "react-select";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import makeAnimated from "react-select/animated";
import { connect } from "react-redux";

const useStyles = makeStyles({
  multiSelect: {
    width: "75%",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const options = [
  { value: "Autoantibody Positive", label: "Autoantibody Positive" },
  {
    value: "Cystic Fibrosis",
    label: "Cystic Fibrosis",
  },
  { value: "Ketosis-Prone Diabetes", label: "Ketosis-Prone Diabetes" },
  { value: "Fulminant Type 1 Diabetes", label: "Fulminant Type 1 Diabetes" },
  {
    value: "Gastric Bypass; Gestational Diabetes",
    label: "Gastric Bypass; Gestational Diabetes",
  },
  {
    value: "Monogenic Diabetes",
    label: "Monogenic Diabetes",
  },
  { value: "No Diabetes", label: "No Diabetes" },
  { value: "Other – Diabetes", label: "Other – Diabetes" },
  { value: "Other – No Diabetes", label: "Other – No Diabetes" },
  { value: "Pending", label: "Pending" },
  { value: "Pregnancy", label: "Pregnancy" },
  { value: "Type 1 Diabetes", label: "Type 1 Diabetes" },
  {
    value: "Type 1 Diabetes Joslin Medalist",
    label: "Type 1 Diabetes Joslin Medalist",
  },
  {
    value: "Type 2 Diabetes; Transplant",
    label: "Type 2 Diabetes; Transplant",
  },
];

const animatedComponents = makeAnimated();

function FilterDonorType(props) {
  const classes = useStyles();

  return (
    <div>
      <h4>Donor Type</h4>
      <Box className={classes.box}>
        <Select
          className={classes.multiSelect}
          value={props.selectedDonorType}
          onChange={(value) => props.setSelectedDonorType(value)}
          options={options}
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponents}
        />
      </Box>
      {console.log(props.selectedDonorType.map((opt) => opt.value))}
    </div>
  );
}

// subscribe
const mapStateToProps = (state) => {
  return {
    selectedDonorType: state.selectedDonorType,
  };
};

// update
const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedDonorType: (newType) =>
      dispatch({ type: "SET_SELECTED_TYPE", value: newType }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterDonorType);
