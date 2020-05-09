import React from "react";

const getTerminalClass = (term) => {
  const modifier = `flights-table__terminal`;
  switch (term) {
    case "A":
      return modifier + "_green";
    case "B":
      return modifier + "_purple";
    case "C":
      return modifier + "_red";
    case "D":
      return modifier + "_blue";
  }
};

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
}) => {
  return (
    <tr key={id} className="flights-table__flight-item">
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
    </tr>
  );
};

export default FlightRow;
