import React, { Component } from "react";
import './JobListElement.css';

export default class JobListElement extends Component {
    render() {
        return (
            <a href="#" className="job-item">
                <div>
                    <h2 className="job-item_title"> Junior Farmer </h2>
                    <p class="job_info">
                        Startup X | Berling | Money brrr
                    </p>
                </div>
            </a>
        );
    }
}