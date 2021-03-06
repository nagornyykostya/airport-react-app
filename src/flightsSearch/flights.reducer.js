import { STORE_FLIGHTS, SET_SEARCH_VALUE, TOGGLE_DEPARTURE, SET_LOADER } from './flights.actions.js';

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
    searchValue: '',
    isDeparture: true,
    isLoading: false
}

const flightsReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_FLIGHTS:
            return {
                ...state,
                departure: getRestructuredFlightsData(action.payload.flightsList.body.departure),
                arrival: getRestructuredFlightsData(action.payload.flightsList.body.arrival)
            }
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload.inputText
            }
            case TOGGLE_DEPARTURE:
                return {
                    ...state,
                    isDeparture: action.payload.isToggled
                }
            case SET_LOADER:
                return {
                    ...state,
                    isLoading: action.payload.isLoading
                }
        default: return state
    }
};

export default flightsReducer;