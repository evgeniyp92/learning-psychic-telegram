import axios from 'axios';

const KEY = 'AIzaSyABybVAZJyqtq2lx3kGEA0gDe2AYoUAXCs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
});
