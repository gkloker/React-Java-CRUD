import axios from "axios";

const URL_API = "http://localhost:8080/api/v1/users";

class AxiosService {
  addUser(user) {
    return axios.post(URL_API, user);
  }

  getUserId(id) {
    return axios.get(URL_API + "/" + id);
  }

  updateUser(user, id) {
    return axios.put(URL_API + "/" + id, user);
  }

  deleteUser(id) {
    return axios.delete(URL_API + "/" + id);
  }
}

export default new AxiosService()