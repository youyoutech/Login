import React, { Component } from 'react';
import axios from 'axios';


export default class ExercisesList extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password:'',
            error: ''
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
        }


        axios.post('http://localhost:4000/users/login', user)
        .then(res => {
            if(res.data.success) {
                this.props.history.push('/success')
            }else{
                this.setState({
                    error: res.data.error
                })
            }
        });
    }


    render() {
        return (
            <div>
                <h3>Welcome to the Login page</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input id="emailInput"
                        type="text"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input id="passwordInput"
                        type="password"
                        required
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}/>
                    </div>

                    {this.state.error &&
                        <p id="error" className="text-danger">{this.state.error}</p>
                    }

                    <div className="form-group">
                        <input id="submitBtn" type="submit" value="Login" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )

    }
}