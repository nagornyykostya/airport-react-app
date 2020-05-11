var moment = require('moment');


const getStatus = (flight) => {

    switch (flight.status) {
        case 'CX': return 'Canceled';
        case 'DP': return 'Departed';
    }
    return flight.status
}


export const getTerminalClass = (term) => {
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

export const getFLightDataForUI = (flight) => {
    return {
        ...flight,
        timeDepShedule: moment(flight.timeDepShedule).format('hh:mm'),
        timeDepExpectCalc: moment(flight.timeDepExpectCalc).format('hh:mm'),
        timeArrShedule: moment(flight.timeArrShedule).format('hh:mm'),
        timeArrExpectCalc: moment(flight.timeArrExpectCalc).format('hh:mm'),
        status: getStatus(flight)
    }
}

export const isMatchingSearch = (flight, searchText) => {

    const { flightNumber, airLineName, airportName } = flight;
    const lowerCaseSearch = searchText.toLowerCase();

    return (flightNumber.toLowerCase().includes(lowerCaseSearch)
        || airLineName.toLowerCase().includes(lowerCaseSearch)
        || airportName.toLowerCase().includes(lowerCaseSearch))
}