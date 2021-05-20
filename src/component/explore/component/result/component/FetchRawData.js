import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

function FetchRawData(props) {
  useEffect(() => {
    const fetchCases = async () => {
      const result = await axios.get("/fetch_cases/");
      props.setRawData(result.data);
    };
    const fetchDonorType = async () => {
      const result = await axios.get("/fetch_donorTypes");
      // donor types map
      const dtMap = {};
      for (var i = 0, dType; i < result.data.length; i++) {
        dType = result.data[i];
        dtMap[dType.donor_type_id] = dType.name;
      }
      props.setDonorTypesMap(dtMap);
    };
    const fetchCauseOfDeath = async () => {
      const result = await axios.get("/fetch_causeOfDeath");
      // cause of death map
      const cODMap = {};
      for (var i = 0, causeOfDeath; i < result.data.length; i++) {
        causeOfDeath = result.data[i];
        cODMap[causeOfDeath.cause_of_death_id] = causeOfDeath.description;
      }
      props.setCauseOfDeathMap(cODMap);
    };
    fetchCases();
    fetchDonorType();
    fetchCauseOfDeath();
  }, []);

  return <div></div>;
}

// Subscribe
const mapStateToProps = (state) => {
  return {
    // Raw Data
    rawData: state.rawData,
  };
};

// update
const mapDispatchToProps = (dispatch) => {
  return {
    setRawData: (newRawData) =>
      dispatch({ type: "SET_RAW_DATA", value: newRawData }),
    setDonorTypesMap: (newDonorTypes) =>
      dispatch({ type: "SET_DONOR_TYPES_MAP", value: newDonorTypes }),
    setCauseOfDeathMap: (newCauseOfDeath) =>
      dispatch({ type: "SET_CAUSE_OF_DEATH_MAP", value: newCauseOfDeath }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchRawData);
