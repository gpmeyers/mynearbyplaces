import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = ({ sendData }) => {

    let onButtonClicked = () => {
        sendData({
            "name": document.getElementById("nameInput").value,
            "location": document.getElementById("locationInput").value,
        });

        document.getElementById("nameInput").value = '';
        document.getElementById("locationInput").value = '';
    }

    return (
        <div>
            <h1 className="mx-auto my-3 text-center">mynearbyplaces</h1>
            <Container>
                <Row>
                    <Col xs="5">
                        Name <input id="nameInput" className="w-100" type="text" placeholder="Place Name" />
                    </Col>
                    <Col xs="5">
                        Location <input id="locationInput" className="w-100" type="text" placeholder="Tucson, AZ" />
                    </Col>
                    <Col xs="2">
                        <Button onClick={onButtonClicked} className="w-100">Search</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;
