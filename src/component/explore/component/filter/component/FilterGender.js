import React, { setState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";

const useStyles = makeStyles({
  formGroup: {
    alignItems: "center",
    justifyContent: "center",
  },
});

function FilterGender(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography id="gender" gutterBottom>
        <h4>Gender</h4>
      </Typography>
      <FormGroup row className={classes.formGroup}>
        <Box mx={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.maleChecked}
                onChange={(event) => props.setMaleChecked(event.target.checked)}
                name="maleChecked"
                color="primary"
              />
            }
            label="Male"
          />
        </Box>
        <Box mx={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.femaleChecked}
                onChange={(event) =>
                  props.setFemaleChecked(event.target.checked)
                }
                name="femaleChecked"
                color="secondary"
              />
            }
            label="Female"
          />
        </Box>
      </FormGroup>
    </div>
  );
}

// subscribe
const mapStateToProps = (state) => {
  return {
    maleChecked: state.maleChecked,
    femaledChecked: state.femaleChecked,
  };
};

// update
const mapDispatchToProps = (dispatch) => {
  return {
    setMaleChecked: (checked) =>
      dispatch({ type: "SET_MALE_CHECKED", value: checked }),
    setFemaleChecked: (checked) =>
      dispatch({ type: "SET_FEMALE_CHECKED", value: checked }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterGender);
