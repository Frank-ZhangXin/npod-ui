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
  { value: "African American", label: "African American" },
  {
    value: "American Indian/Alaska Native",
    label: "American Indian/Alaska Native",
  },
  { value: "Arab/Middle Eastern", label: "Arab/Middle Eastern" },
  { value: "Asian", label: "Asian" },
  { value: "Caucasian", label: "Caucasian" },
  {
    value: "Hawaiian/Other Pacific Islander",
    label: "Hawaiian/Other Pacific Islander",
  },
  { value: "Hispanic/Latino", label: "Hispanic/Latino" },
  { value: "Multiracial", label: "Multiracial" },
];

const animatedComponents = makeAnimated();

function FilterRace(props) {
  const classes = useStyles();

  return (
    <div>
      <h4>Race</h4>
      <Box className={classes.box}>
        <Select
          className={classes.multiSelect}
          value={props.selectedRace}
          onChange={(value) => props.setSelectedRace(value)}
          options={options}
          isMulti
          closeMenuOnSelect={false}
          components={animatedComponents}
        />
      </Box>
      {console.log(props.selectedRace.map((opt) => opt.value))}
    </div>
  );
}

// subscribe
const mapStateToProps = (state) => {
  return {
    selectedRace: state.selectedRace,
  };
};

// update
const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedRace: (newRace) =>
      dispatch({ type: "SET_SELECTED_RACE", value: newRace }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterRace);
