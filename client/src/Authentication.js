import axios from 'axios'

class Authentication
{
    constructor()
    {
        this.authenticated = false;
    }

    state = 
    {
        users: [],
        email: "",
        password: ""
    }

    onEmailChange(value) {
        this.setState({
            email: value
        });
    }

    onPasswordChange(value) {
        this.setState({
            password: value
        });
    }


    componentDidMount() {
        axios.get(`http://localhost:3001/users`)
          .then(res => {
            const users = res.data;
            this.setState({ users });
          })
          .catch(error => console.log(error));
      }

    login(cb)
    {
        if ( this.state.email == this.state.users.map(users => users.name))
        {
            this.authenticated = true;
        }
        cb();
    }

    logut(cb)
    {
        this.authenticated = false;
        cb();
    }
    
    isAuthenticated()
    {
        return this.authenticated;
    }  

}

export default new Authentication()