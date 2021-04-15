import React, { setState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import testData from "../../../../data/test_case_data_0407.json";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    //flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  button: {
    marginBottom: theme.spacing(2),
  },
  paper: {
    textAlign: "center",
    // color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      cursor: "pointer",
    },
  },
}));

export default function Result() {
  const classes = useStyles();
  console.log(testData);
  return (
    <div>
      <Typography variant="h3">SEARCH REASULT</Typography>
      <div style={{ width: "100%" }}>
        <Box display="flex" justifyContent="flex-end">
          <Box>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Download All
            </Button>
          </Box>
        </Box>
      </div>
      <Grid container spacing={2}>
        {testData.map((donnorCase) => (
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Paper elevation={3} hover className={classes.paper}>
              <Typography variant="h5">{donnorCase.case_id}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
