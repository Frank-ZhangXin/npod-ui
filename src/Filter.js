import React, { setState } from "react";
import Typography from "@material-ui/core/Typography";
import FilterAge from "./FilterAge";
import FilterGender from "./FilterGender";
import FilterRace from "./FilterRace";
import FilterBMI from "./FilterBMI";
import FilterDonnorType from "./FilterDonnorType";
import FilterDiabetesDuration from "./FilterDiabetesDuration";
import FilterHbA1c from "./FilterHbA1c";
import FilterAutoAntibody from "./FilterAutoAntibody";
import FilterAutoAntibodyPositiveNumber from "./FilterAutoAntibodyPositiveNumber";
import FilterInsulitis from "./FilterInsulitis";

export default function Filter() {
  return (
    <div>
      <Typography>
        <h2>FILTER</h2>
      </Typography>
      <FilterAge />
      <FilterGender />
      <FilterRace />
      <FilterBMI />
      <FilterDonnorType />
      <FilterDiabetesDuration />
      <FilterHbA1c />
      <FilterAutoAntibody />
      <FilterAutoAntibodyPositiveNumber />
      <FilterInsulitis />
    </div>
  );
}
