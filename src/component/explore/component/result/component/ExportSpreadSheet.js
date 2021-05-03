import React from "react";
import Button from "@material-ui/core/Button";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(2),
  },
}));

export default function ExportSpreadsheet({ csvData, fileName }) {
  const classes = useStyles();
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={(e) => exportToCSV(csvData, fileName)}
      >
        Download All
      </Button>
    </div>
  );
}
