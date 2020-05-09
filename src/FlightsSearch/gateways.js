const BASE_URL = 'https://api.iev.aero/api/flights';

export const fetchFlights = (date) => {
   return fetch(`${BASE_URL}/${date}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } throw new Error('Loading data failed')
        })
};