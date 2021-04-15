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

export default function FilterAge() {
  const classes = useStyles();

  const [ageRange, setAgeRange] = React.useState([0, 65]);
  const [ageMin, setAgeMin] = React.useState(0);
  const [ageMax, setAgeMax] = React.useState(65);

  const handleAgeRangeSliderChange = (event, newAgeRange) => {
    setAgeRange(newAgeRange);
    setAgeMin(newAgeRange[0]);
    setAgeMax(newAgeRange[1]);
  };

  const handleMinAgeInputChange = (event) => {
    let newMinAge =
      typeof Number(event.target.value) === "number"
        ? Number(event.target.value)
        : 0;
    newMinAge = newMinAge >= ageMax ? ageMax : newMinAge;
    setAgeMin(newMinAge);
    const newAgeRange = [newMinAge, { ageRange }.ageRange[1]];
    setAgeRange(newAgeRange);
  };

  const handleMaxAgeInputChange = (event) => {
    let newMaxAge =
      typeof Number(event.target.value) === "number"
        ? Number(event.target.value)
        : 100;
    newMaxAge = newMaxAge <= ageMin ? ageMin : newMaxAge;
    setAgeMax(newMaxAge);
    const newAgeRange = [{ ageRange }.ageRange[0], newMaxAge];
    setAgeRange(newAgeRange);
  };

  return (
    <div>
      <Typography id="age-range-slider" gutterBottom>
        <h4>Age Range</h4>
      </Typography>

      <Slider
        className={classes.slider}
        value={ageRange}
        onChange={handleAgeRangeSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={65}
        aria-labelledby="age-range-slider"
      />
      <Grid container spacing={10} alignItems="center" justify="space-around">
        <Grid item xs={4}>
          <TextField
            className={classes.textfield}
            id="min-age-input"
            label="Start"
            defaultValue={ageMin}
            value={ageMin}
            margin="dense"
            onChange={handleMinAgeInputChange}
            inputProps={{
              step: 1,
              min: 0,
              max: 65,
              type: "number",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textfield}
            id="min-age-input"
            label="To"
            defaultValue={ageMax}
            value={ageMax}
            margin="dense"
            onChange={handleMaxAgeInputChange}
            inputProps={{
              step: 1,
              min: 0,
              max: 65,
              type: "number",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
