import React, { setState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Paper from "@material-ui/core/Paper";
import test_data from "./data/test_data.json";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    //flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    // width: 1200,
    // height: 1625,
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Result() {
  const classes = useStyles();
  console.log(test_data);
  return (
    <div>
      <Typography>
        <h1>SEARCH REASULT</h1>
      </Typography>
      <div className={classes.root}>
        <GridList cellHeight={120} className={classes.gridList} cols={4}>
          {test_data.map((donnorCase) => (
            <Paper elevation={3}>
              <GridListTile key={donnorCase.case_id}>
                <h6>{donnorCase.case_id.substring(7, 13)}</h6>
              </GridListTile>
            </Paper>
          ))}
        </GridList>
      </div>
    </div>
  );
}
