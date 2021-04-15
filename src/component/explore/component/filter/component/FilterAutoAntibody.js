import React, { setState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  formGroup: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function FilterRace() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    // P: positive; N: negative
    gadaP: true,
    gadaN: false,
    ia2aP: true,
    ia2aN: false,
    miaaP: true,
    miaaN: false,
    znt8aP: true,
    znt8aN: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Typography id="auto antibody">
        <h4>Auto Antibody</h4>
      </Typography>
      <FormGroup column className={classes.formGroup}>
        {/* GADA Positive and Negative */}
        <Grid container spacing={0} alignItems="center" justify="space-evenly">
          <Grid item>
            <Typography gutterBottom>
              <h5>GADA</h5>
            </Typography>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.gadaP}
                  onChange={handleChange}
                  name="gadaP"
                  color="primary"
                />
              }
              label="+"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.gadaN}
                  onChange={handleChange}
                  name="gadaN"
                  color="secondary"
                />
              }
              label="-"
            />
          </Grid>
        </Grid>
        {/* IA2A Positive and Negative */}
        <Grid container spacing={0} alignItems="center" justify="space-evenly">
          <Grid item>
            <Typography gutterBottom>
              <h5>IA2A</h5>
            </Typography>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.ia2aP}
                  onChange={handleChange}
                  name="ia2aP"
                  color="primary"
                />
              }
              label="+"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.ia2aN}
                  onChange={handleChange}
                  name="ia2aN"
                  color="secondary"
                />
              }
              label="-"
            />
          </Grid>
        </Grid>
        {/* mIAA Positive and Negative */}
        <Grid container spacing={0} alignItems="center" justify="space-evenly">
          <Grid item>
            <Typography gutterBottom>
              <h5>mIAA</h5>
            </Typography>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.miaaP}
                  onChange={handleChange}
                  name="miaaP"
                  color="primary"
                />
              }
              label="+"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.miaaN}
                  onChange={handleChange}
                  name="miaaN"
                  color="secondary"
                />
              }
              label="-"
            />
          </Grid>
        </Grid>
        {/* ZnT8A Positive and Negative */}
        <Grid container spacing={0} alignItems="center" justify="space-evenly">
          <Grid item>
            <Typography gutterBottom>
              <h5>ZnT8A</h5>
            </Typography>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.znt8aP}
                  onChange={handleChange}
                  name="znt8aP"
                  color="primary"
                />
              }
              label="+"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.znt8aN}
                  onChange={handleChange}
                  name="znt8aN"
                  color="secondary"
                />
              }
              label="-"
            />
          </Grid>
        </Grid>
      </FormGroup>
    </div>
  );
}
