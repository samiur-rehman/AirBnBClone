import React, { useState } from "react";
import "./Search.css";
import { Button } from "@material-ui/core";
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
// DateRangePicker css
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useHistory } from "react-router-dom";

// Date Picker Component
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(range) {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <div className="search__numberGuest">
        <h2>Number of guests </h2>{" "}
        <input min={0} defaultValue={2} type="number" />
        <PeopleIcon />
      </div>
      {/* <div className="search_airbnbButton"> */}
      <Button variant="outlined" onClick={() => history.push("/search")}>
        Search Airbnb
      </Button>
      {/* </div> */}
    </div>
  );
}

export default Search;
