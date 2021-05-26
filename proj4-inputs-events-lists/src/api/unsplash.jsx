import axios from 'axios';

// Creates an instance of the client with some configurations
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KkeTma_ruzAufux-Xueh0higHNIiJ3re6H0jxQRmVck',
    },
});
