import React, { setState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  formGroup: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function FilterInsulitis() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    positiveChecked: true,
    negativeChecked: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
                checked={state.positiveChecked}
                onChange={handleChange}
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
                checked={state.negativeChecked}
                onChange={handleChange}
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
