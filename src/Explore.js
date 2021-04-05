import React, { setState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Filter from "./Filter";
import Result from "./Result";

const useStyles = makeStyles({
  grid: {
    width: "100%",
  },
});

export default function Explore() {
  const classes = useStyles();
  return (
    <div>
      <Typography>
        <h1>CASE EXPLORE</h1>
      </Typography>
      <Grid container spacing={2} justify={"center"} alignItems={"stretch"}>
        <Grid item xs="12" md="4" lg="2">
          <Paper variant="elevation={3}">
            <Filter />
          </Paper>
        </Grid>
        <Grid item xs="12" md="7" lg="7">
          <Paper variant="elevation={3}" className={classes.grid}>
            <Result />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
