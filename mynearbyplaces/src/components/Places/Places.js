import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { Place } from '../../components';

const Places = ({ places, remove }) => {
    return (
        <div>
            <Container fluid>
                {!places.length ? <p>Nearby places will appear here!</p> : places.map((place) => (
                    <Row>
                        <Col>
                            <Place key={place} place={place} remove={remove} />
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

export default Places;
