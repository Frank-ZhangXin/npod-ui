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

function FilterCPeptide(props) {
  const classes = useStyles();

  return (
    <div>
      <h4>C-Peptide Detectable</h4>
      <FormGroup row className={classes.formGroup}>
        <Box mx={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.cPeptidePositive}
                onChange={(event) =>
                  props.setCPeptidePositiveChecked(event.target.checked)
                }
                name="cPeptidePositive"
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
                checked={props.cPeptideNegative}
                onChange={(event) =>
                  props.setCPeptideNegativeChecked(event.target.checked)
                }
                name="cPeptideNegative"
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
    cPeptidePositive: state.cPeptidePositive,
    cPeptideNegative: state.cPeptideNegative,
  };
};

// update
const mapDispatchToProps = (dispatch) => {
  return {
    setCPeptidePositiveChecked: (checked) =>
      dispatch({ type: "SET_CPEPTIDE_POSITIVE", value: checked }),
    setCPeptideNegativeChecked: (checked) =>
      dispatch({ type: "SET_CPEPTIDE_NEGATIVE", value: checked }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCPeptide);
