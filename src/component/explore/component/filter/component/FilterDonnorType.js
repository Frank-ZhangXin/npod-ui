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

export default function FilterDonnorType() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    typeAChecked: true,
    typeBChecked: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Typography id="donnor type" gutterBottom>
        <h4>Donnor Type</h4>
      </Typography>
      <FormGroup row className={classes.formGroup}>
        <Box mx={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.male}
                onChange={handleChange}
                name="typeAChecked"
                color="primary"
              />
            }
            label="Type A"
          />
        </Box>
        <Box mx={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.female}
                onChange={handleChange}
                name="typeBChecked"
                color="secondary"
              />
            }
            label="Type B"
          />
        </Box>
      </FormGroup>
    </div>
  );
}
