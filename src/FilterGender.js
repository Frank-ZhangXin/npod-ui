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

export default function FilterGender() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    maleChecked: true,
    femaleChecked: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
                checked={state.maleChecked}
                onChange={handleChange}
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
                checked={state.femaleChecked}
                onChange={handleChange}
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
