import React, { useState } from 'react';

import { Form, Row, Col, Button } from 'react-bootstrap';

import api from '../../communication/api';

const AddPage = ({ sendData }) => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    let onFormSubmit = (event) => {
        event.preventDefault();

        api.addPlace(name, city + ', ' + state);
    }

    return (
        <div>
            <h3>Add a Place!</h3>

            <Form onSubmit={onFormSubmit}>
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Name of establishment" onChange={(e) => {setName(e.target.value)}} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="Tucson" onChange={(e) => {setCity(e.target.value)}} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>State</Form.Label>
                    <Form.Control placeholder="Arizona" onChange={(e) => {setState(e.target.value)}} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddPage;
