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

export default function FilterRace() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    africanAmericanChecked: true,
    caucasionChecked: true,
    hispanicChecked: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Typography id="race" gutterBottom>
        <h4>Race</h4>
      </Typography>
      <FormGroup column className={classes.formGroup}>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.africanAmericanChecked}
                onChange={handleChange}
                name="africanAmericanChecked"
                color="primary"
              />
            }
            label="African American"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.caucasionChecked}
                onChange={handleChange}
                name="caucasionChecked"
                color="secondary"
              />
            }
            label="Caucasion"
          />
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.hispanicChecked}
                onChange={handleChange}
                name="hispanicChecked"
                color="default"
              />
            }
            label="Hispanic"
          />
        </Box>
      </FormGroup>
    </div>
  );
}
