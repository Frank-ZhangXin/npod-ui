import React from "react";
import Button from "@material-ui/core/Button";
import FileSaver from "file-saver";
import XLSX from "xlsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(2),
  },
}));

function filterJSON(raw, dtm) {
  const allowedColumns = [
    "case_id",
    "RR_id",
    "donor_type_comments",
    "slices_shipping_status",
    "islet_isolation_status",
    "pancreas_weight_grams",
    "pancreas_weight_comments",
    "admission_course",
    "clinical_history",
    "downtime_minutes",
    "age_years",
    "gestational_age_weeks",
    "diabetes_hx_years",
    "sex",
    "race_ethnicity",
    "height_cm",
    "weight_kg",
    "BMI",
    "BMI_percentile",
    "HbA1c_percent",
    "C_peptide_ng_mL",
    "admission_glucose_mg_dL",
    "peak_glucose_mg_dL",
    "meds_diabetes",
    "meds_home",
    "meds_hospital",
    "infections",
    "allergies",
    "serologies",
    "SARS_COV_2_results",
    "hemodiluted_status",
    "ABO_blood_type",
    "case_recovery_type",
    "histopathology",
    "RIN_value",
    "donor_type_id",
    "cause_of_death_id",
  ];
  const extraColumns = ["donor_type_id", "cause_of_death_id"];
  const extraColumns2 = [
    "autoantibody_results",
    "HLA_transplant",
    "ICU_time_days",
    "Transit_time_minutes",
    "HLA_high_resolution",
  ];
  var newData = [];
  console.log(dtm);
  raw.forEach((donor) => {
    const filtered = Object.keys(donor)
      .filter((key) => allowedColumns.includes(key))
      .reduce((obj, key) => {
        obj[key] = donor[key];
        if (key === "donor_type_id") {
          // obj["donor_type"] = donorTypesMap[donor[key]];
          //console.log(donorTypesMap[donor[key]]);
        }
        return obj;
      }, {});
    newData.push(filtered);
  });
  console.log(newData);
  return newData;
}

export default function ExportSpreadsheet({
  csvData,
  fileName,
  donorTypesMap,
}) {
  const classes = useStyles();
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  filterJSON(csvData);
  const dtm = donorTypesMap;
  console.log(dtm);
  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(filterJSON(csvData, dtm));
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

// Subscribe
const mapStateToProps = (state) => {
  return {
    donorTypesMap: state.donorTypesMap,
  };
};
