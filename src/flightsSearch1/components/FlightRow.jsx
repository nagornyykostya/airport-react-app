import React from "react";
import { getTerminalClass } from "../preparingDataForUi.js";

const FlightRow = ({
  term,
  id,
  airportName,
  timeDepShedule,
  timeArrShedule,
  status,
  airLineLogo,
  airLineName,
  flightNumber,
}) => (<tr key={id} className="flights-table__flight-item">
  <td>
    <span className={`flights-table__terminal ${getTerminalClass(term)}`}>
      {term}
    </span>
  </td>
  <td>
    {timeDepShedule !== "Invalid date" ? timeDepShedule : timeArrShedule}
  </td>
  <td>{airportName}</td>
  <td>{status}</td>
  <td className="flights-table__item-airline-cell">
    <img className="flights-table__airline-logo" src={airLineLogo} />
    {airLineName}
  </td>
  <td>{flightNumber}</td>
</tr>);

export default FlightRow;
