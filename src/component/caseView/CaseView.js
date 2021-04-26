import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";

import CaseViewTitle from "./CaseViewTitle";
import TabView from "./TabView";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  dialogPaper: {
    height: "80vh",
  },
}));

export default function CaseView(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("xl");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.setDialogue(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Donnor Case
      </Button> */}
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        height="400px"
        open={props.open}
        onClose={handleClose}
        aria-labelledby="donnor-case-dialog-title"
        classes={{ paper: classes.dialogPaper }}
      >
        <CaseViewTitle onClose={handleClose}>NPOD CASE ID: 33063</CaseViewTitle>

        <DialogContent dividers>
          {/* <DialogContentText></DialogContentText> */}
          <TabView />
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            <GetAppIcon />
            Download All
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
