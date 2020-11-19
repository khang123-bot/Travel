import React from "react";
import axios from "axios";
import "./SignUp.css";
import { withRouter } from 'react-router';
import { Container, Form, Col, InputGroup, FormControl, Button, Row, Image, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from "react-router-bootstrap";

class SignUp extends React.Component {
    state = {
        displayName: "",
        password: "",
        email: ""
    };

    onDisplayNameChange(value) {
        this.setState({
            displayName: value
        });
    }

    onPasswordChange(value) {
        this.setState({
            password: value
        });
    }

    onEmailChange(value) {
        this.setState({
            email: value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            displayName: this.state.displayName,
            password: this.state.password,
            email: this.state.email
        };
        axios
            .post("http://localhost:3001/users", data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        this.props.history.push('/Login');
    };

    render() {
        return (
            <div >
                    <Row className="bg">
                        <Image src="aircraft.jpg" fluid className="image" />
                    </Row>
                <Card className="SignUp-container">
                    <Form  onSubmit={this.handleSubmit}>

                        <Form.Label className="h3">Sign Up</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="Display-name">Display name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Enter your desired Username"
                                aria-label="Username"
                                aria-describedby="User-name"
                                value={this.state.displayName}
                                onChange={e => this.onDisplayNameChange(e.target.value)} required
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Check</Button>
                            </InputGroup.Append>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="Pass-word">Password</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Enter your desired Password"
                                aria-label="Password"
                                aria-describedby="Pass-word"
                                type="password"
                                value={this.state.password}
                                onChange={e => this.onPasswordChange(e.target.value)} required
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="E-mail">Email</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Enter email"
                                aria-label="Email"
                                aria-describedby="E-mail"
                                type="email"
                                type="input"
                                value={this.state.email}
                                onChange={e => this.onEmailChange(e.target.value)} required
                            />
                        </InputGroup>
                        <Button variant="primary" type="submit">Sign Up</Button>
                        <br></br>
                        <h7>Already have an account? click here to</h7>
                        <LinkContainer to="/Login" className="mr-sm-2">
                            <Button variant="link" size="sm">Login</Button>
                        </LinkContainer>

                    </Form>
                </Card>


            </div>
        );
    }
}

export default SignUp;
