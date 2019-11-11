import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class ExercisesList extends Component {

    render() {
        return (
            <div>
                <h3 className="text-success">You are now logged in!</h3>
                <Link to="/login">Back to login page</Link>
            </div>
        )

    }
}