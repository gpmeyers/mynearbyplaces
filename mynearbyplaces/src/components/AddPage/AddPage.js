import React from 'react';

import api from '../../communication/api';

const AddPage = () => {

    let onFormSubmit = () => {
        let name =  document.getElementById("nameInput").value;
        let city = document.getElementById("cityInput").value
        let state = document.getElementById("stateInput");

        console.log(name);
        console.log(city + ', ' + state);

        api.addPlace(name, city + ', ' + state);

        document.getElementById("nameInput").value = '';
        document.getElementById("locationInput").value = '';
    }

    return (
        <div className="formContainer">
            <form>
                <h3>Add a Place!</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input id="nameInput" type="text" className="form-control" placeholder="Name of establishment" />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input id="cityInput" type="text" className="form-control" placeholder="Tucson" />
                </div>

                <div className="form-group">
                    <label>State</label>
                    <input id="stateInput" type="text" className="form-control" placeholder="AZ" />
                </div>

                <button className="btn btn-primary btn-block" onClick={onFormSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default AddPage;
