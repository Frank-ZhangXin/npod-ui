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

export default function FilterDiabetesDuration() {
  const classes = useStyles();
  // DD for Diabetes Duration
  const [DDRange, setDDRange] = React.useState([0, 80]);
  const [DDMin, setDDMin] = React.useState(0);
  const [DDMax, setDDMax] = React.useState(80);

  const handleDDRangeSliderChange = (event, newDDRange) => {
    setDDRange(newDDRange);
    setDDMin(newDDRange[0]);
    setDDMax(newDDRange[1]);
  };

  const handleMinDDInputChange = (event) => {
    let newMinDD =
      typeof Number(event.target.value) === "number"
        ? Number(event.target.value)
        : 0;
    newMinDD = newMinDD >= DDMax ? DDMax : newMinDD;
    setDDMin(newMinDD);
    const newDDRange = [newMinDD, { DDRange }.DDRange[1]];
    setDDRange(newDDRange);
  };

  const handleMaxDDInputChange = (event) => {
    let newMaxDD =
      typeof Number(event.target.value) === "number"
        ? Number(event.target.value)
        : 100;
    newMaxDD = newMaxDD <= DDMin ? DDMin : newMaxDD;
    setDDMax(newMaxDD);
    const newDDRange = [{ DDRange }.DDRange[0], newMaxDD];
    setDDRange(newDDRange);
  };

  return (
    <div>
      <Typography id="dd-range-slider" gutterBottom>
        <h4>Diabetes Duration</h4>
      </Typography>

      <Slider
        className={classes.slider}
        value={DDRange}
        onChange={handleDDRangeSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={80}
        aria-labelledby="dd-range-slider"
      />
      <Grid container spacing={10} alignItems="center" justify="space-around">
        <Grid item xs={4}>
          <TextField
            className={classes.textfield}
            id="min-dd-input"
            label="Start"
            defaultValue={DDMin}
            value={DDMin}
            margin="dense"
            onChange={handleMinDDInputChange}
            helperText="Years"
            inputProps={{
              step: 1,
              min: 0,
              max: 80,
              type: "number",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textfield}
            id="min-dd-input"
            label="To"
            defaultValue={DDMax}
            value={DDMax}
            margin="dense"
            onChange={handleMaxDDInputChange}
            helperText="Years"
            inputProps={{
              step: 1,
              min: 0,
              max: 80,
              type: "number",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
