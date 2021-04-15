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

export default function FilterHbA1c() {
  const classes = useStyles();

  const [hRange, setHRange] = React.useState([4.4, 13.9]);
  const [hMin, setHMin] = React.useState(4.4);
  const [hMax, setHMax] = React.useState(13.9);

  const handleAgeRangeSliderChange = (event, newHRange) => {
    setHRange(newHRange);
    setHMin(newHRange[0]);
    setHMax(newHRange[1]);
  };

  const handleMinHInputChange = (event) => {
    let newMinH =
      typeof Number(event.target.value) === "number"
        ? Number(event.target.value)
        : 0;
    newMinH = newMinH >= hMax ? hMax : newMinH;
    setHMin(newMinH);
    const newHRange = [newMinH, { hRange }.hRange[1]];
    setHRange(newHRange);
  };

  const handleMaxHInputChange = (event) => {
    let newMaxH =
      typeof Number(event.target.value) === "number"
        ? Number(event.target.value)
        : 100;
    newMaxH = newMaxH <= hMin ? hMin : newMaxH;
    setHMax(newMaxH);
    const newHRange = [{ hRange }.hRange[0], newMaxH];
    setHRange(newHRange);
  };

  return (
    <div>
      <Typography id="age-range-slider" gutterBottom>
        <h4>Hb1A1c Range</h4>
      </Typography>

      <Slider
        className={classes.slider}
        value={hRange}
        onChange={handleAgeRangeSliderChange}
        valueLabelDisplay="auto"
        min={4.4}
        max={13.9}
        step={0.1}
        aria-labelledby="h-range-slider"
      />
      <Grid container spacing={10} alignItems="center" justify="space-around">
        <Grid item xs={4}>
          <TextField
            className={classes.textfield}
            id="min-h-input"
            label="Start"
            defaultValue={hMin}
            value={hMin}
            margin="dense"
            onChange={handleMinHInputChange}
            inputProps={{
              step: 0.1,
              min: 4.4,
              max: 13.9,
              type: "number",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textfield}
            id="min-h-input"
            label="To"
            defaultValue={hMax}
            value={hMax}
            margin="dense"
            onChange={handleMaxHInputChange}
            inputProps={{
              step: 0.1,
              min: 4.4,
              max: 13.9,
              type: "number",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
