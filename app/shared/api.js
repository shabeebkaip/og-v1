import axios from "axios"
import { globalGetService } from "../utils/apiServices"

const getData = async (path, params = {}) => {
  try {
    const response = await globalGetService(path, params)
    return response.data
  } catch (err) {
    return  err
  }

}


export const authenticateUser = () => {
  let url = window.location.origin ;

  if (url.endsWith('/')) {
    url = url.slice(0, -1);
  }
  let formData = new FormData();
  formData.append("redirect_uri", url);
  axios.post('https://api-one-global.code-ox.com/api/authenticate', { redirect_uri: url }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((res) => {
    window.location.href = res.data.data
  }).catch((err) => {
    console.log(err)
  })
}

export const getFormApi = (key) => getData('form',key)

export const getUserApi = async (token) => {
  try {
      const response = await axios.get("https://api-one-global.code-ox.com/api/getUserProfile", {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      return response.data;
  } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('token_id');
      window.location.href = '/';
      console.error('Error fetching user:', error);
      throw error;
  }
};