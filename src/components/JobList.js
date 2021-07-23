import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListHoC from './List';
import JobListElementHoC from './JobListElement';
import List from "../components/List";
import jobs from "../data/jobs";
import JobListElement from "./JobListElement";

export default class JobList extends Component {
    render() {
        // const { jobs, withStats, hasEditPermission } = this.props;
        // const JobListElement = JobListElementHoC(withStats, hasEditPermission);
        // const List = ListHoC(JobListElement);
        return (
            // <List items={jobs} />
            <List items={jobs} itemElement={JobListElement}/>
        );
    }
}

JobList.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        company: PropTypes.string,
        location: PropTypes.string,
        salary: PropTypes.string,
    }))
};