import React from 'react';
import JobList from '../components/JobList';
import SubtleErrorBox from '../components/SubtleErrorBox';
import Spinner from '../components/Spinner';
import List from "../components/List";
import jobs from "../data/jobs";
import JobListElement from "../components/JobListElement";
// import JobsAPI from '../api/JobsAPI';

export default class JobListPage extends React.Component {
    state = {
        jobs: jobs,
        loading: false,
    };

    // componentDidMount = async () => {
    //     this.setState({loading: true});
    //     // const jobs =  jobs;
    //     this.setState({jobs, loading: false});
    // };

    // loadJobList = async () => {
    //     this.setState({ loading: true });
    //     const searchQuery = this.props.location.search.replace('?search=', '');
    //     const { success, response, error } = await JobsAPI.getJobsMocked(searchQuery);
    //     if (success) {
    //         this.setState({
    //             jobs: response.data,
    //             loading: false,
    //             error: undefined,
    //         });
    //     } else {
    //         this.setState({
    //             error,
    //             loading: false,
    //         });
    //     }
    // };

    render() {
        return (
            <JobList jobs={this.state.jobs} />
        );
    }
}