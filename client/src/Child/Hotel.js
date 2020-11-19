import React from "react";
import "./Home.css";
import "./Hotel.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Container, Image, Card, CardGroup, FormControl, Col, Button } from "react-bootstrap";

export default function Hotel() {
    return (
        <body className="bg">
            <div className="Home">
                    <Row>
                        <Image src="aircraft.jpg" fluid className="image" />
                    </Row>
            </div>

            <Card className="Hotel">
                <Card.Body >
                    <Form.Row >
                        <Col xs="auto">
                            <FormControl
                                placeholder="Location"
                            />
                        </Col>
                        <Col xs="auto">
                            <FormControl
                                placeholder="Date"
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