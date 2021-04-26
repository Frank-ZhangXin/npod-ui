import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import testData from "../../../../../data/test_case_data_0407.json";

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      cursor: "pointer",
    },
    numberOfResult: {
      marginBottom: theme.spacing(2),
    },
  },
}));

function Search(props) {
  const classes = useStyles();
  // const filteredData = props.rawData

  const handleOpen = () => {
    props.setDialogue(true);
  };

  const filteredData = testData
    // Age
    .filter(
      (donor) =>
        donor.age_years !== null &&
        donor.age_years >= props.ageMin &&
        donor.age_years <= props.ageMax
    )
    // Gender
    .filter(
      (donor) =>
        donor.sex !== null &&
        ((donor.sex === "Female" && props.femaleChecked) ||
          (donor.sex != null && donor.sex === "Male" && props.maleChecked))
    )
    // Race
    .filter((donor) => {
      if (donor.race !== null && props.selectedRace.length > 0) {
        if (
          props.selectedRace.map((obj) => obj.value).indexOf(donor.race) > -1
        ) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    })
    // BMI
    .filter(
      (donor) =>
        donor.BMI !== null &&
        donor.BMI >= props.bmiMin &&
        donor.BMI <= props.bmiMax
    )
    // Duration of Diabetes
    .filter(
      (donor) =>
        donor.diabetes_hx_years !== null &&
        donor.diabetes_hx_years >= props.DDMin &&
        donor.diabetes_hx_years <= props.DDMax
    )
    // Hb1A1c
    .filter(
      (donor) =>
        donor.HbA1c !== null &&
        donor.HbA1c >= props.hMin &&
        donor.HbA1c <= props.hMax
    );
  console.log(filteredData);
  return (
    <div>
      <div style={{ width: "100%" }}>
        <Box display="flex" justifyContent="flex-start">
          <Box mb={2}>
            <Typography variant="h5">
              Totally {filteredData.length} cases are showing
            </Typography>
          </Box>
        </Box>
      </div>
      <Grid container spacing={2}>
        {filteredData.map((donorCase, index) => (
          <Grid item xs={12} sm={4} md={3} lg={2} key={index}>
            <Paper elevation={3} onClick={handleOpen} className={classes.paper}>
              <Typography variant="h5">{donorCase.case_id}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

// Subscribe
const mapStateToProps = (state) => {
  return {
    // Age
    ageRange: state.ageRange,
    ageMin: state.ageMin,
    ageMax: state.ageMax,

    // Autoantibody type
    gadaP: state.gadaP,
    gadaN: state.gadaN,
    ia2aP: state.ia2aP,
    ia2aN: state.ia2aN,
    miaaP: state.miaaP,
    miaaN: state.miaaN,
    znt8aP: state.znt8aP,
    znt8aN: state.znt8aN,

    // Antibody Positive
    zeroChecked: state.zeroChecked,
    oneChecked: state.oneChecked,
    twoChecked: state.twoChecked,
    threeChecked: state.threeChecked,
    fourChecked: state.fourChecked,

    // BMI
    bmiRange: state.bmiRange,
    bmiMin: state.bmiMin,
    bmiMax: state.bmiMax,

    // Diabetes Duration
    DDRange: state.DDRange,
    DDMin: state.DDMin,
    DDMax: state.DDMax,

    // Donor Type (object array)
    selectedDonorType: state.selectedDonorType,

    // Gender
    maleChecked: state.maleChecked,
    femaleChecked: state.femaleChecked,

    // Hb1A1c
    hRange: state.hRange,
    hMin: state.hMin,
    hMax: state.hMax,

    // Insulitis
    insulitisPositiveChecked: state.insulitisPositiveChecked,
    insulitisNegativeChecked: state.insulitisNegativeChecked,

    // Race
    selectedRace: state.selectedRace,

    // Raw Data
    rawData: state.rawData,

    // Filtered Data
    filteredData: state.filteredData,
  };
};

// update
const mapDispatchToProps = (dispatch) => {
  return {
    setRawData: (newRawData) =>
      dispatch({ type: "SET_RAW_DATA", value: newRawData }),
    setFilteredData: (newFilteredData) =>
      dispatch({ type: "SET_FILTERED_DATA", value: newFilteredData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
