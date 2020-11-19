import React from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import "./Error404.css";


export default class UserList extends React.Component {
    state =
        {
            users: []
        }


    componentDidMount() {
        axios.get('http://localhost:3001/users')
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <body>
                <Button></Button>
                <ul>
                    {this.state.users.map(users => 
                        {
                            return(
                                <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Display Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{users.id}</td>
                                        <td>{users.displayName}</td>
                                        <td>{users.email}</td>
                                        <td>{users.password}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            );
                           
                           
                        })}
                </ul>

            </body>

        );
    }

}
