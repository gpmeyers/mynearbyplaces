import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = ({ sendData }) => {

    let onButtonClicked = () => {
        sendData({
            "city": document.getElementById("termInput").value,
            "state": document.getElementById("locInput").value,
        });
    }

    return (
        <div>
            <h1 className="mx-auto my-3 text-center">mynearbyplaces</h1>
            <Container>
                <Row>
                    <Col xs="5">
                        City <input id="termInput" className="w-100" type="text" placeholder="plumbers, delivery, takeout..." />
                    </Col>
                    <Col xs="5">
                        State <input id="locInput" className="w-100" type="text" placeholder="Tucson, AZ" />
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
