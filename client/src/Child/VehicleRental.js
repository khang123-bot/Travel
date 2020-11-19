import React from "react";
import "./Home.css";
import "./VehicleRental.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Container, Image, Card, CardGroup, FormControl, Col, Button } from "react-bootstrap";

export default function Vehicle() {
    return (
        <body className="bg">
            <div className="Home">
                    <Row>
                        <Image src="aircraft.jpg" fluid className="image" />
                    </Row>
            </div>

            <Card className="Rental">
                <Card.Body >
                    <Form.Row >
                        <Col xs="auto">
                            <FormControl
                                placeholder="Pickup location"
                            />
                        </Col>
                        <Col xs="auto">
                            <FormControl
                                placeholder="Option"
                            />
                        </Col>
                        <Col xs="auto">
                            <FormControl
                                placeholder="Option"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button>Search</Button>
                        </Col>


                    </Form.Row>

                </Card.Body>
            </Card>
        </body>

    );
}