import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 8s2LeIt-Ipj9xs-GsIhUcSFKEA25sDBgBc5_5hMtjo0'
    }

});
