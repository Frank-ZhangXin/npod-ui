import React from "react";
import { connect } from "react-redux";

function Search(props) {
  return (
    <div>
      <p>--------Age------------</p>
      Age range: {props.ageRange[0]} to {props.ageRange[1]}
      <br />
      Age min: {props.ageMin}
      <br />
      Age max: {props.ageMax}
      <br />
      <input
        type="text"
        onChange={(event) => props.setRawData(event.target.value)}
      />
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
    femaledChecked: state.femaleChecked,

    // Hb1A1c
    hRange: state.hRange,
    hMin: state.hMin,
    hMax: state.hMax,

    // Insulitis
    insulitisPositiveChecked: state.insulitisPositiveChecked,
    insulitisNegativeChecked: state.insulitisNegativeChecked,

    // Race
    selectedRace: state.selectedRace,
  };
};

// update
const mapDispatchToProps = (dispatch) => {
  return {
    setRawData: (newRawData) =>
      dispatch({ type: "SET_RAW_DATA", value: newRawData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
