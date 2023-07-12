import axios from "axios";
axios.defaults.timeout = 1000000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
export default axios