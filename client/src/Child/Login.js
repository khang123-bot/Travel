import React from "react";
import axios from "axios";
import "./SignUp.css";
import { withRouter } from 'react-router';
import { Container, Form, Col, InputGroup, FormControl, Button, Row, Image, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import auth from '../Authentication'
import { LinkContainer } from "react-router-bootstrap";

class SignUp extends React.Component {
    //UNFINISHED 
    //NEED PROPER SERVER IMPLEMENTATION
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            displayName: "",
            password: "",
            email: ""
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this)

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

    componentDidMount() {
        axios.get("http://localhost:3001/users")
          .then(res => {
            const users = res.data;
            this.setState({ users });
          })
      }

    handleSubmit = e => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/users")
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    login(cb)
    {
        
        if ( this.state.email == this.state.users.map(user => user.email))
        {
            auth.isAuthenticated = true;
        }
        cb();
    }



    render() {
        return (
            <div >
                <Row className="bg">
                    <Image src="aircraft.jpg" fluid className="image" />
                </Row>
                <Card className="SignUp-container">
                    <Form onSubmit={this.login}>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="E-mail">Email</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Enter email"
                                aria-label="Email"
                                aria-describedby="E-mail"
                                type="email"
                                value={this.state.email}
                                onChange={e => this.onEmailChange(e.target.value)} required
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="Pass-word">Password</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Enter Password"
                                aria-label="Password"
                                aria-describedby="Pass-word"
                                type="password"
                            />
                        </InputGroup>


                        <Button variant="primary" type="submit">Login</Button>
                        <br></br>
                    </Form>
                </Card>


            </div>
        );
    }
}

export default SignUp;
