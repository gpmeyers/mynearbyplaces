let apiHost = 'https://gpmeyers-nearbyplaces-api.herokuapp.com';

let addPlace = (name, location) => {
    return fetch(apiHost + '/place', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            placeLocation: location
        })
    });
}

let getPlaces = () => {
    return fetch(apiHost + '/places')
    .then(response => response.json());
}

let addReview = (placeName, review) => {
    return fetch(apiHost + '/review/' + placeName, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            review: review
        })
    });
}

let search = (name, location) => {
    return fetch(apiHost + '/search/' + name + '/' + location)
    .then(response => response.json())
    .catch(e => {console.log('Error with search request: '); console.log(e);});
}

let api = {
    addPlace: addPlace,
    getPlaces: getPlaces,
    addReview: addReview,
    search: search
};

export default api;