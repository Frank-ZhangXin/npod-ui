import React, { setState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

const useStyles = makeStyles({
  slider: {
    width: "75%",
  },
  textfield: {
    width: 45,
  },
});

function FilterDiabetesDuration(props) {
  const classes = useStyles();

  const handleDDRangeSliderChange = (event, newDDRange) => {
    props.setDDRange(newDDRange);
  };

  const handleMinDDInputChange = (event) => {
    let newMinDD =
      typeof Number(event.target.value) === "number"
        ? Number(event.target.value)
        : 0;
    newMinDD = newMinDD >= props.DDMax ? props.DDMax : newMinDD;
    props.setDDMin(newMinDD);
  };

  const handleMaxDDInputChange = (event) => {
    let newMaxDD =
      typeof Number(event.target.value) === "number"
        ? Number(event.target.value)
        : 100;
    newMaxDD = newMaxDD <= props.DDMin ? props.DDMin : newMaxDD;
    props.setDDMax(newMaxDD);
  };

  return (
    <div>
      <h4>Diabetes Duration</h4>

      <Slider
        className={classes.slider}
        value={props.DDRange}
        onChange={handleDDRangeSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={85}
        aria-labelledby="dd-range-slider"
      />
      <Grid container spacing={10} alignItems="center" justify="space-around">
        <Grid item xs={4}>
          <TextField
            className={classes.textfield}
            id="min-dd-input"
            label="Start"
            // defaultValue={props.DDMin}
            value={props.DDMin}
            margin="dense"
            onChange={handleMinDDInputChange}
            helperText="Years"
            inputProps={{
              step: 1,
              min: 0,
              max: 85,
              type: "number",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textfield}
            id="min-dd-input"
            label="To"
            // defaultValue={props.DDMax}
            value={props.DDMax}
            margin="dense"
            onChange={handleMaxDDInputChange}
            helperText="Years"
            inputProps={{
              step: 1,
              min: 0,
              max: 85,
              type: "number",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

// subscribe
const mapStateToProps = (state) => {
  return {
    DDRange: state.DDRange,
    DDMin: state.DDMin,
    DDMax: state.DDMax,
  };
};

// update
const mapDispatchToProps = (dispatch) => {
  return {
    setDDRange: (newDDRange) =>
      dispatch({ type: "SET_DD_RANGE", value: newDDRange }),
    setDDMin: (newDDMin) => dispatch({ type: "SET_DD_MIN", value: newDDMin }),
    setDDMax: (newDDMax) => dispatch({ type: "SET_DD_MAX", value: newDDMax }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterDiabetesDuration);
