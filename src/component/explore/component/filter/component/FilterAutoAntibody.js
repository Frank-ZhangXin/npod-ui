import React, { setState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

const useStyles = makeStyles({
  formGroup: {
    alignItems: "center",
    justifyContent: "center",
  },
});

function FilterAutoAntiboy(props) {
  const classes = useStyles();

  return (
    <div>
      <h4>Auto Antibody</h4>
      <FormGroup className={classes.formGroup}>
        {/* GADA Positive and Negative */}
        <Grid container spacing={0} alignItems="center" justify="space-evenly">
          <Grid item>
            <h5>GADA</h5>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.gadaP}
                  onChange={(event) => props.setGadaP(event.target.checked)}
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
                  checked={props.gadaN}
                  onChange={(event) => props.setGadaN(event.target.checked)}
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
            <h5>IA2A</h5>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.ia2aP}
                  onChange={(event) => props.setIa2aP(event.target.checked)}
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
                  checked={props.ia2aN}
                  onChange={(event) => props.setIa2aN(event.target.checked)}
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
            <h5>mIAA</h5>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.miaaP}
                  onChange={(event) => props.setMiaaP(event.target.checked)}
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
                  checked={props.miaaN}
                  onChange={(event) => props.setMiaaN(event.target.checked)}
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
            <h5>ZnT8A</h5>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.znt8aP}
                  onChange={(event) => props.setZnt8aP(event.target.checked)}
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
                  checked={props.znt8aN}
                  onChange={(event) => props.setZnt8aN(event.target.checked)}
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

// subscribe
const mapStateToProps = (state) => {
  return {
    gadaP: state.gadaP,
    gadaN: state.gadaN,
    ia2aP: state.ia2aP,
    ia2aN: state.ia2aN,
    miaaP: state.miaaP,
    miaaN: state.miaaN,
    znt8aP: state.znt8aP,
    znt8aN: state.znt8aN,
  };
};

// update
const mapDispatchToProps = (dispatch) => {
  return {
    setGadaP: (checked) => dispatch({ type: "SET_GADAP", value: checked }),
    setGadaN: (checked) => dispatch({ type: "SET_GADAN", value: checked }),
    setIa2aP: (checked) => dispatch({ type: "SET_IA2AP", value: checked }),
    setIa2aN: (checked) => dispatch({ type: "SET_IA2AN", value: checked }),
    setMiaaP: (checked) => dispatch({ type: "SET_MIAAP", value: checked }),
    setMiaaN: (checked) => dispatch({ type: "SET_MIAAN", value: checked }),
    setZnt8aP: (checked) => dispatch({ type: "SET_ZNT8AP", value: checked }),
    setZnt8aN: (checked) => dispatch({ type: "SET_ZNT8AN", value: checked }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterAutoAntiboy);
