import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import testData from "../../../../../data/test_case_data_0513.json";
import donor_types from "../../../../../data/donor_types.json";
import ExportSpreadsheet from "./ExportSpreadSheet";

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

  const handleOpen = (e, donorCase) => {
    props.setCurrentCase(donorCase);
    props.setDialogue(true);
  };

  const filteredData = props.rawData
    // const filteredData = testData
    // Donor type
    .filter((donor) => {
      if (donor.donor_type_id !== null && props.selectedDonorType.length > 0) {
        const typeName = props.donorTypesMap[donor.donor_type_id];
        if (
          props.selectedDonorType.map((obj) => obj.value).indexOf(typeName) > -1
        ) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    })
    // Age
    .filter(
      (donor) =>
        (donor.age_years !== null &&
          donor.age_years >= props.ageMin &&
          donor.age_years <= props.ageMax) ||
        props.ageEnable === false
    )
    // Gender
    .filter(
      (donor) =>
        (donor.sex !== null &&
          ((donor.sex === "Female" && props.femaleChecked) ||
            (donor.sex != null &&
              donor.sex === "Male" &&
              props.maleChecked))) ||
        props.genderEnable === false
    )
    // Race
    .filter((donor) => {
      if (donor.race_ethnicity !== null && props.selectedRace.length > 0) {
        if (
          props.selectedRace
            .map((obj) => obj.value)
            .indexOf(donor.race_ethnicity) > -1
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
        (donor.BMI !== null &&
          donor.BMI >= props.bmiMin &&
          donor.BMI <= props.bmiMax) ||
        props.bmiEnable === false
    )
    // C-Peptide
    .filter(
      (donor) =>
        (donor.C_peptide_ng_mL !== null &&
          ((donor.C_peptide_ng_mL === "<0.05" &&
            props.cPeptideNegative === true) ||
            (donor.C_peptide_ng_mL !== "<0.05" &&
              props.cPeptidePositive === true))) ||
        props.cPeptideEnable === false
    )
    // Duration of Diabetes
    .filter(
      (donor) =>
        (donor.diabetes_hx_years !== null &&
          donor.diabetes_hx_years >= props.DDMin &&
          donor.diabetes_hx_years <= props.DDMax) ||
        props.DDEnable === false
    )
    // Hb1A1c
    .filter(
      (donor) =>
        (donor.HbA1c_percent !== null &&
          donor.HbA1c_percent >= props.hMin &&
          donor.HbA1c_percent <= props.hMax) ||
        props.hEnable === false
    )
    // Insulitis
    .filter(
      (donor) =>
        (props.insulitisPositiveChecked === true &&
          donor.histopathology !== null &&
          donor.histopathology.indexOf("Insulitis") !== -1) ||
        (props.insulitisNegativeChecked === true &&
          (donor.histopathology === null ||
            donor.histopathology.indexOf("Insulitis") === -1)) ||
        props.insulitisEnable === false
    );
  console.log(filteredData);
  return (
    <div>
      <div style={{ width: "100%" }}>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h4">SEARCH RESULT</Typography>
          </Box>
          <Box>
            <ExportSpreadsheet
              csvData={filteredData}
              fileName="exportedSheet"
            />
          </Box>
        </Box>
      </div>
      <div style={{ width: "100%" }}>
        <Box display="flex" justifyContent="flex-start">
          <Box mb={2}>
            <Typography variant="h6" color="secondary">
              Totally {filteredData.length} cases are showing
            </Typography>
          </Box>
        </Box>
      </div>
      <Grid container spacing={2}>
        {filteredData.map((donorCase, index) => (
          <Grid item xs={12} sm={4} md={3} lg={2} key={index}>
            <Paper
              elevation={3}
              onClick={(e) => handleOpen(e, donorCase)}
              className={classes.paper}
            >
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
    ageEnable: state.ageEnable,
    ageRange: state.ageRange,
    ageMin: state.ageMin,
    ageMax: state.ageMax,

    // Autoantibody type
    aaEnable: state.aaEnable,
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
    bmiEnable: state.bmiEnable,
    bmiRange: state.bmiRange,
    bmiMin: state.bmiMin,
    bmiMax: state.bmiMax,

    // Diabetes Duration
    DDEnable: state.DDEnable,
    DDRange: state.DDRange,
    DDMin: state.DDMin,
    DDMax: state.DDMax,

    // Donor Type (object array)
    selectedDonorType: state.selectedDonorType,

    // Gender
    genderEnable: state.genderEnable,
    maleChecked: state.maleChecked,
    femaleChecked: state.femaleChecked,

    // Hb1A1c
    hEnable: state.hEnable,
    hRange: state.hRange,
    hMin: state.hMin,
    hMax: state.hMax,

    // Insulitis
    insulitisEnable: state.insulitisEnable,
    insulitisPositiveChecked: state.insulitisPositiveChecked,
    insulitisNegativeChecked: state.insulitisNegativeChecked,

    // Race
    selectedRace: state.selectedRace,

    // C-Peptide
    cPeptideEnable: state.cPeptideEnable,
    cPeptidePositive: state.cPeptidePositive,
    cPeptideNegative: state.cPeptideNegative,

    // Raw Data
    rawData: state.rawData,

    // Filtered Data
    filteredData: state.filteredData,

    // Donor Types (map)
    donorTypesMap: state.donorTypesMap,
  };
};

// update
const mapDispatchToProps = (dispatch) => {
  return {
    setRawData: (newRawData) =>
      dispatch({ type: "SET_RAW_DATA", value: newRawData }),
    setFilteredData: (newFilteredData) =>
      dispatch({ type: "SET_FILTERED_DATA", value: newFilteredData }),
    setCurrentCase: (newCase) =>
      dispatch({ type: "SET_CURRENT_CASE", value: newCase }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
