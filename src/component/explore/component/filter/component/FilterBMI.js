import React, { setState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  slider: {
    width: "75%",
  },
  textfield: {
    width: 45,
  },
});

export default function FilterBMI() {
  const classes = useStyles();

  const [bmiRange, setBmiRange] = React.useState([0, 45.49]);
  const [bmiMin, setBmiMin] = React.useState(0);
  const [bmiMax, setBmiMax] = React.useState(45.49);

  const handleBMIRangeSliderChange = (event, newBmiRange) => {
    setBmiRange(newBmiRange);
    setBmiMin(newBmiRange[0]);
    setBmiMax(newBmiRange[1]);
  };

  const handleMinBmiInputChange = (event) => {
    let newMinBmi =
      typeof Number(event.target.value) === "number"
        ? Number(event.target.value)
        : 0;
    newMinBmi = newMinBmi >= bmiMax ? bmiMax : newMinBmi;
    setBmiMin(newMinBmi);
    const newBmiRange = [newMinBmi, { bmiRange }.bmiRange[1]];
    setBmiRange(newBmiRange);
  };

  const handleMaxBmiInputChange = (event) => {
    let newBmiAge =
      typeof Number(event.target.value) === "number"
        ? Number(event.target.value)
        : 50;
    newBmiAge = newBmiAge <= bmiMin ? bmiMin : newBmiAge;
    setBmiMax(newBmiAge);
    const newBmiRange = [{ bmiRange }.bmiRange[0], newBmiAge];
    setBmiRange(newBmiRange);
  };

  return (
    <div>
      <Typography id="bmi-range-slider" gutterBottom>
        <h4>BMI Range</h4>
      </Typography>

      <Slider
        className={classes.slider}
        value={bmiRange}
        onChange={handleBMIRangeSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={45.49}
        step={0.1}
        aria-labelledby="bmi-range-slider"
      />
      <Grid container spacing={10} alignItems="center" justify="space-around">
        <Grid item xs={4}>
          <TextField
            className={classes.textfield}
            id="min-age-input"
            label="Start"
            defaultValue={bmiMin}
            value={bmiMin}
            margin="dense"
            onChange={handleMinBmiInputChange}
            inputProps={{
              step: 0.1,
              min: 0,
              max: 45.49,
              type: "number",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textfield}
            id="min-age-input"
            label="To"
            defaultValue={bmiMax}
            value={bmiMax}
            margin="dense"
            onChange={handleMaxBmiInputChange}
            inputProps={{
              step: 0.1,
              min: 0,
              max: 45.49,
              type: "number",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
