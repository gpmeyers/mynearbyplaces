import axios from 'axios';

const URL = 'https://api.yelp.com/v3';
const API_KEY = 'AIzaSyB_CYUDA0uCcol1RQdbQAtm5R9RjfwHZ0g';

export const fetchNearbyPlaces = async (location, term) => {
    let yelpREST = axios.create({
        baseURL: URL,
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-type": "applicationCache/json"
        }
    })

    yelpREST("/businesses/search", {
        params: {
            location: location,
            term: term,
            limit: 10
        }
    }).then(({ data }) => {
        console.log("data retrieved" + data);
    })
}