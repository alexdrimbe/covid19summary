import React from "react";
import RowItem from "./RowItem";

const CountriesSummary = ({ countries }) => {
  return (
    <div>
      <RowItem
        header={true}
        name="Name"
        newConfirmed="New Confirmed"
        newDeaths="New Deaths"
      />

      {countries.map(
        ({ CountryCode, Country, NewConfirmed, NewDeaths, Date }) => (
          <RowItem
            key={CountryCode}
            name={Country}
            newConfirmed={NewConfirmed}
            newDeaths={NewDeaths}
          />
        )
      )}
    </div>
  );
};

export default CountriesSummary;
