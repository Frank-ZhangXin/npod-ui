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

export default function FilterAutoAntibodyPositiveNumber() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    oneChecked: true,
    twoChecked: false,
    threeChecked: false,
    fourCheck: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Typography id="auto antibody number" gutterBottom>
        <h4>Auto Antibody Positive</h4>
      </Typography>
      <FormGroup row className={classes.formGroup}>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.oneChecked}
                onChange={handleChange}
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
                checked={state.twoChecked}
                onChange={handleChange}
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
                checked={state.threeChecked}
                onChange={handleChange}
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
                checked={state.fourChecked}
                onChange={handleChange}
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
