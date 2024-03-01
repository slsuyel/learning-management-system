import axios from 'axios';
import { baseUrl } from '../baseurl/BaseUrl';
export const callApi = async (method, url, dataObj = [], headers = {}) => {
  try {
    headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    const response = await axios({
      method: method,
      url: `${baseUrl}${url}`,
      data: dataObj,
      headers: headers
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      console.error('Error making API call:', error);
      return null;
    }
  }
};


