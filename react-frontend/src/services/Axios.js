import axios from "axios";

const USER_API_URL = "http://localhost:8080/api/v1/users";

class Axios {
  getUsers() {
    return axios.get(USER_API_URL);
  }
}

export default new Axios();