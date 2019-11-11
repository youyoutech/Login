import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class ExercisesList extends Component {

    render() {
        return (
            <div>
                <h3>Welcome Home</h3>

                <Link to="/login">login</Link>
            </div>
        )

    }
}