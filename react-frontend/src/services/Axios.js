import axios from "axios";

const URL_API = "http://localhost:8080/api/v1/users";

class AxiosService {
  addUser(user) {
    return axios.post(URL_API, user);
  }

  getUserId(id) {
    const data = axios.get(URL_API + "/" + id);
    console.log("data = ", data);
    return data;
  }
}

export default new AxiosService()