import React, { Component } from "react";
import './JobListElement.css';
import jobs from "../data/jobs";

export default class JobListElement extends Component {
    render() {
        const { items, itemElement : Item} = this.props;
        return (
            <a href="#" className="job-item">
                <div>
                    {jobs.map( item =>
                        <Item
                            {...item}
                            key = {item.id}/> )}
                </div>
            </a>
        );
    }
}