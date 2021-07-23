import jobs from '../data/jobs';
import NetworkService from "./NetworkService";

export default {
    getJobs: async() => {
        const request = await NetworkService.get('/jobs');
        if(request.success) {
            return request.response.data;
        } else {
            return request.error;
        }
    }
}