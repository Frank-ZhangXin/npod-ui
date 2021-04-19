import React, { setState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";

const useStyles = makeStyles({
  formGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

function FilterAutoAntibodyPositiveNumber(props) {
  const classes = useStyles();

  return (
    <div>
      <h4>Auto Antibody Positive</h4>

      <FormGroup row className={classes.formGroup}>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.zeroChecked}
                onChange={(event) => props.setZeroChecked(event.target.checked)}
                name="zeroChecked"
                color="default"
              />
            }
            label="0"
          />
        </Box>

        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.oneChecked}
                onChange={(event) => props.setOneChecked(event.target.checked)}
                name="oneChecked"
                color="default"
              />
            }
            label="1"
          />
        </Box>

        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.twoChecked}
                onChange={(event) => props.setTwoChecked(event.target.checked)}
                name="twoChecked"
                color="default"
              />
            }
            label="2"
          />
        </Box>

        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.threeChecked}
                onChange={(event) =>
                  props.setThreeChecked(event.target.checked)
                }
                name="threeChecked"
                color="default"
              />
            }
            label="3"
          />
        </Box>

        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.fourChecked}
                onChange={(event) => props.setFourChecked(event.target.checked)}
                name="fourChecked"
                color="default"
              />
            }
            label="4"
          />
        </Box>
      </FormGroup>
    </div>
  );
}

// subscribe
const mapStateToProps = (state) => {
  return {
    zeroChecked: state.zeroChecked,
    oneChecked: state.oneChecked,
    twoChecked: state.twoChecked,
    threeChecked: state.threeChecked,
    fourChecked: state.fourChecked,
  };
};

// update
const mapDispatchToProps = (dispatch) => {
  return {
    setZeroChecked: (checked) =>
      dispatch({ type: "SET_ZERO_CHECKED", value: checked }),
    setOneChecked: (checked) =>
      dispatch({ type: "SET_ONE_CHECKED", value: checked }),
    setTwoChecked: (checked) =>
      dispatch({ type: "SET_TWO_CHECKED", value: checked }),
    setThreeChecked: (checked) =>
      dispatch({ type: "SET_THREE_CHECKED", value: checked }),
    setFourChecked: (checked) =>
      dispatch({ type: "SET_FOUR_CHECKED", value: checked }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterAutoAntibodyPositiveNumber);
