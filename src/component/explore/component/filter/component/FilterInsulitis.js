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

function FilterInsulitis(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography id="auto antibody number" gutterBottom>
        <h4>Insulitis</h4>
      </Typography>
      <FormGroup row className={classes.formGroup}>
        <Box mx={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.insulitisPositiveChecked}
                onChange={(event) =>
                  props.setInsulitisPositiveChecked(event.target.checked)
                }
                name="positiveChecked"
                color="primary"
              />
            }
            label="+"
          />
        </Box>
        <Box mx={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.insulitisNegativeChecked}
                onChange={(event) =>
                  props.setInsulitisNegativeChecked(event.target.checked)
                }
                name="negativeChecked"
                color="secondary"
              />
            }
            label="-"
          />
        </Box>
      </FormGroup>
    </div>
  );
}

// subscribe
const mapStateToProps = (state) => {
  return {
    insulitisPositiveChecked: state.insulitisPositiveChecked,
    insulitisNegativeChecked: state.insulitisNegativeChecked,
  };
};

// update
const mapDispatchToProps = (dispatch) => {
  return {
    setInsulitisPositiveChecked: (checked) =>
      dispatch({ type: "SET_INSULITIS_POSITIVE_CHECKED", value: checked }),
    setInsulitisNegativeChecked: (checked) =>
      dispatch({ type: "SET_INSULITIS_NEGATIVE_CHECKED", value: checked }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterInsulitis);
