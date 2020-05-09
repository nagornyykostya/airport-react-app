import { STORE_FLIGHTS, SEARCH_FLIGHTS, TOGGLE_DEPARTURE } from './flights.actions.js';

const getRestructuredFlightsData = (flightsList) => {
    return flightsList.map(flight => {
        return {
            id: flight.ID || "",
            term: flight.term || "",
            timeDepShedule: flight.timeDepShedule || "",
            timeDepExpectCalc: flight.timeDepExpectCalc || "",
            timeArrShedule: flight.timeArrShedule || "",
            timeArrExpectCalc: flight.timeArrExpectCalc || "",
            airportName: flight["airportToID.name_en"] || flight["airportFromID.city_en"] || "",
            status: flight.status || "",
            airLineLogo: flight.airline ? flight.airline.en.logoSmallName : "",
            airLineName: flight.airline ? flight.airline.en.name : "",
            flightNumber: `${flight["carrierID.IATA"]}${flight["fltNo"]}` || ""
        }
    });
};

const initialState = {
    departure: [],
    arrival: [],
    searchFlight: '',
    isDeparture: true
}

const flightsReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_FLIGHTS:
            return {
                ...state,
                departure: getRestructuredFlightsData(action.payload.flightsList.body.departure),
                arrival: getRestructuredFlightsData(action.payload.flightsList.body.arrival)
            }
        case SEARCH_FLIGHTS:
            return {
                ...state,
                searchFlight: action.payload.inputText
            }
            case TOGGLE_DEPARTURE:
                return {
                    ...state,
                    isDeparture: action.payload.isToggled
                }
        default: return state
    }
};

export default flightsReducer;