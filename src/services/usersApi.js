import axios from 'axios'

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1/"

async function getUsers(currentPage = 1) {
    try {
      const response = await axios.get(`/users?page=${currentPage}&count=5`).then(res => res.data.users);
      console.log(response)
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const api = {
      getUsers
  }

export default api