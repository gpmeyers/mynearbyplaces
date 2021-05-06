import React, { useState } from 'react';

import api from '../../communication/api';

const AddPage = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    let onFormSubmit = (e) => {
        e.preventDefault();

        console.log(name);
        console.log(city + ', ' + state);

        api.addPlace(name, city + ', ' + state)
        .then(() => console.log('The place was added successfully'))
        .catch(e => console.log(e));

        document.getElementById("nameInput").value = '';
        document.getElementById("cityInput").value = '';
        document.getElementById("stateInput").value = '';
    }

    let onNameChange = (e) => {
        setName(e.target.value);
    }

    let onCityChange = (e) => {
        setCity(e.target.value);
    }
    let onStateChange = (e) => {
        setState(e.target.value);
    }

    return (
        <div className="formContainer">
            <form>
                <h3>Add a Place!</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input id="nameInput" type="text" className="form-control" placeholder="Name of establishment" value={name} onChange={onNameChange} />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input id="cityInput" type="text" className="form-control" placeholder="Tucson" value={city} onChange={onCityChange} />
                </div>

                <div className="form-group">
                    <label>State</label>
                    <input id="stateInput" type="text" className="form-control" placeholder="AZ" value={state} onChange={onStateChange} />
                </div>

                <button className="btn btn-primary btn-block" onClick={onFormSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default AddPage;
