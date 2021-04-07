import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { Place } from '../../components';

const Places = ({ places }) => {
    if(!places.length) return <p>Nearby places will appear here!</p>

    return (
        <div>
            <Container fluid>
                {places.map((place) => (
                    <Row>
                        <Col>
                            <Place place={place} />
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

export default Places;
