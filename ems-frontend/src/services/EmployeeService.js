import axios from 'axios';
const REST_API_URL = 'http://localhost:8080/api/employee';
export const listEmployee = () => axios.get(REST_API_URL);
 