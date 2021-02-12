import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:5001/clone-fae31/us-central1/api'
}); // cloud functio  api url

export default instance;