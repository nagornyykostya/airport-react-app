import * as flightsGateways from './gateways.js';

export const STORE_FLIGHTS = 'STORE_FLIGHTS';
export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';
export const TOGGLE_DEPARTURE = 'TOGGLE_DEPARTURE';

export const toggleDeparture = (isToggled) => {
    return {
        type: TOGGLE_DEPARTURE,
        payload: {
            isToggled
        }
    };
};

export const storeFlights = (flightsList) => {
    return {
        type: STORE_FLIGHTS,
        payload: {
            flightsList
        }
    };
};

export const searchFlights = (inputText) => {
    return {
        type: SEARCH_FLIGHTS,
        payload: {
            inputText
        }
    };
};

export const fetchFlights = (date) => {
    return function (dispatch) {
        flightsGateways.fetchFlights(date)
            .then(flightsList =>
                dispatch(storeFlights(flightsList))
            )
    };
};

