import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

function FetchRawData(props) {
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/fetch_all/");
      props.setRawData(result.data);
    };
    fetchData();
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchRawData);
