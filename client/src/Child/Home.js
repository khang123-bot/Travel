import React from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Container, Image, Card, CardGroup, FormControl, Col, Button, CardDeck } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Home() {
    return (
        <body className="bg">
            <div>
                <Row>
                    <Image src="aircraft.jpg" fluid className="image" />
                </Row>
            </div>
            <Container>
                <Card className="Journey">
                    <Card.Body >
                        <Form.Row >

                            <LinkContainer to="./Flight">
                                <Col xs="auto">
                                    <Button size="lg">Begin your journey</Button>
                                </Col>
                            </LinkContainer>

                        </Form.Row>

                    </Card.Body>
                </Card>

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>

                <CardDeck className="Center">
                    <Button variant="primary" className="mr-sm-2">IMAGE PLACEHOLDER</Button>{'  '}
                    <Button variant="primary" className="mr-sm-2">IMAGE PLACEHOLDER</Button>{'  '}
                    <Button variant="primary" className="mr-sm-2">IMAGE PLACEHOLDER</Button>{'  '}
                    <Button variant="primary" className="mr-sm-2">IMAGE PLACEHOLDER</Button>{'  '}
                    <Button variant="primary" className="mr-sm-2">IMAGE PLACEHOLDER</Button>{'  '}
                    <Button variant="primary" className="mr-sm-2">IMAGE PLACEHOLDER</Button>{'  '}
                </CardDeck>
            </Container>
        </body>

    );
}