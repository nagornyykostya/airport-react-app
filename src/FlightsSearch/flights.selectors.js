import { createSelector } from "reselect"
import { getFLightDataForUI, isMatchingSearch } from "./preparingDataForUi.js";

export const isLoadingSelector = (state) => {
    return state.flights.isLoading
}

export const departureFlightsSelector = (state) => {
    return state.flights.departure
}

export const arrivalFlightsSelector = (state) => {
    return state.flights.arrival
}

export const searchValueSelector = (state) => {
    return state.flights.searchValue
}

export const isDepartureSelector = (state) => {
    return state.flights.isDeparture
}

export const searchFlights = createSelector([
    departureFlightsSelector, arrivalFlightsSelector, searchValueSelector, isDepartureSelector
], (departureFlights, arrivalFlights, searchValue, isDeparture) => {
    const flights = isDeparture ? departureFlights : arrivalFlights
    return flights.reduce((acc, flight) => {

        const timeExpectCalc = isDeparture ? flight.timeDepExpectCalc : flight.timeArrExpectCalc;

        if (new Date(timeExpectCalc).getDay() !== new Date().getDay()) {
            return acc
        }
        if (searchValue !== ""
            && isMatchingSearch(flight, searchValue)) {
            return acc.concat(getFLightDataForUI(flight))
        }
        if (!searchValue) {
            return acc.concat(getFLightDataForUI(flight))
        }
        return acc
    }, [])
})

