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

function FilterAge(props) {
  const classes = useStyles();

  const handleAgeRangeSliderChange = (event, newAgeRange) => {
    props.setAgeRange(newAgeRange);
  };

  const handleMinAgeInputChange = (event) => {
    let newMinAge =
      typeof Number(event.target.value) === "number"
        ? Number(event.target.value)
        : 0;
    newMinAge = newMinAge >= props.ageMax ? props.ageMax : newMinAge;
    props.setAgeMin(newMinAge);
  };

  const handleMaxAgeInputChange = (event) => {
    let newMaxAge =
      typeof Number(event.target.value) === "number"
        ? Number(event.target.value)
        : 100;
    newMaxAge = newMaxAge <= props.ageMin ? props.ageMin : newMaxAge;
    props.setAgeMax(newMaxAge);
  };

  return (
    <div>
      <Typography id="age-range-slider" gutterBottom>
        <h4>Age Range</h4>
      </Typography>

      <Slider
        className={classes.slider}
        value={props.ageRange}
        onChange={handleAgeRangeSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={95}
        aria-labelledby="age-range-slider"
      />
      <Grid container spacing={10} alignItems="center" justify="space-around">
        <Grid item xs={4}>
          <TextField
            className={classes.textfield}
            id="min-age-input"
            label="Start"
            defaultValue={props.ageMin}
            value={props.ageMin}
            margin="dense"
            onChange={handleMinAgeInputChange}
            inputProps={{
              step: 1,
              min: 0,
              max: 95,
              type: "number",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textfield}
            id="min-age-input"
            label="To"
            defaultValue={props.ageMax}
            value={props.ageMax}
            margin="dense"
            onChange={handleMaxAgeInputChange}
            inputProps={{
              step: 1,
              min: 0,
              max: 95,
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
    ageRange: state.ageRange,
    ageMin: state.ageMin,
    ageMax: state.ageMax,
  };
};

// update
const mapDispatchToProps = (dispatch) => {
  return {
    setAgeRange: (newAgeRange) =>
      dispatch({ type: "SET_AGE_RANGE", value: newAgeRange }),
    setAgeMin: (newAgeMin) =>
      dispatch({ type: "SET_AGE_MIN", value: newAgeMin }),
    setAgeMax: (newAgeMax) =>
      dispatch({ type: "SET_AGE_MAX", value: newAgeMax }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterAge);
