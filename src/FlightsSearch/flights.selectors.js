import { createSelector } from "reselect"
import { getFLightDataForUI, isMatchingSearch } from "./preparingDataForUi.js";

export const departureFlightsSelector = (state) => {
    return state.flights.departure
}

export const arrivalFlightsSelector = (state) => {
    return state.flights.arrival
}

export const searchTextSelector = (state) => {
    return state.flights.searchFlight
}

export const isDepartureSelector = (state) => {
    return state.flights.isDeparture
}

export const searchFlights = createSelector([
    departureFlightsSelector, arrivalFlightsSelector, searchTextSelector, isDepartureSelector
], (departureFlights, arrivalFlights, searchText, isDeparture) => {
    const flights = isDeparture ? departureFlights : arrivalFlights
    return flights.reduce((acc, flight) => {

        const timeExpectCalc = isDeparture ? flight.timeDepExpectCalc : flight.timeArrExpectCalc;

        if (new Date(timeExpectCalc).getDay() !== new Date().getDay()) {
            return acc
        }
        if (searchText !== ""
            && isMatchingSearch(flight, searchText)) {
            return acc.concat(getFLightDataForUI(flight))
        }
        if (!searchText) {
            return acc.concat(getFLightDataForUI(flight))
        }
        return acc
    }, [])
})

// export const searchDeparture = createSelector([
//     departureFlightsSelector, searchTextSelector
// ], (departureFlights, searchText) => {
//     return departureFlights.reduce((acc, flight) => {
//         if (new Date(flight.timeDepExpectCalc).getDay() !== new Date().getDay()) {
//             return acc
//         }
//         if (searchText !== ""
//             && isMatchingSearch(flight, searchText)) {
//             return acc.concat(getFLightDataForUI(flight))
//         }
//         if (!searchText) {
//             return acc.concat(getFLightDataForUI(flight))
//         }
//         return acc
//     }, [])
// })

// export const searchArrival = createSelector([
//     arrivalFlightsSelector, searchTextSelector
// ], (arrivalFlights, searchText) => {
//     return arrivalFlights.reduce((acc, flight) => {
//         if (new Date(flight.timeArrExpectCalc).getDay() !== new Date().getDay()) {
//             return acc
//         }
//         if (searchText !== ""
//             && isMatchingSearch(flight, searchText)) {
//             return acc.concat(getFLightDataForUI(flight))
//         }
//         if (!searchText) {
//             return acc.concat(getFLightDataForUI(flight))
//         }
//         return acc
//     }, [])
// })

