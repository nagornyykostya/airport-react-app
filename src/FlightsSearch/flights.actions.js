import * as flightsGateways from './gateways.js';

export const STORE_FLIGHTS = 'STORE_FLIGHTS';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const TOGGLE_DEPARTURE = 'TOGGLE_DEPARTURE';
export const SET_LOADER = 'SET_LOADER';

export const toggleDeparture = (isToggled) => {
    return {
        type: TOGGLE_DEPARTURE,
        payload: {
            isToggled
        }
    };
};

export const setLoader = (isLoading) => {
    return {
        type: SET_LOADER,
        payload:{
            isLoading
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

export const setSearchValue = (inputText) => {
    return {
        type: SET_SEARCH_VALUE,
        payload: {
            inputText
        }
    };
};

export const fetchFlights = (date) => {
    return function (dispatch) {
        dispatch(setLoader(true))
        flightsGateways.fetchFlights(date)
            .then(flightsList => {
                dispatch(storeFlights(flightsList))
                dispatch(setLoader(false))
            }
            )
    };
};

