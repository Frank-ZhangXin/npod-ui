import React, { setState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Filter from "./component/filter/Filter";
import Result from "./component/result/Result";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function Explore() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h1">CASE EXPLORE</Typography>
      <Grid container spacing={2} justify={"center"} alignItems={"stretch"}>
        <Grid item xs={12} md={4} lg={2}>
          <Paper
            elevation={3}
            style={{
              width: "100%",
            }}
          >
            <Filter />
          </Paper>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <Paper
            elevation={3}
            style={{
              width: "100%",
            }}
            className={classes.paper}
          >
            <Result />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
