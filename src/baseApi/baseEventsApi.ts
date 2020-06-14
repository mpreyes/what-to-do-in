import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.eventful.com/',
    headers: { 'Access-Control-Allow-Origin': '*',
     'Content-Type': 'application/json',
'Access-Control-Allow-Credentials': true,
'Access-Control-Request-Method': 'GET'},
});