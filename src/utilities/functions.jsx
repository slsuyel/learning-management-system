import axios from 'axios';
import { baseUrl } from '../baseurl/BaseUrl';
export const callApi = async (method, url, dataObj = [], headers = {}, bUrl = true) => {

  // if (bUrl) {
  //   const apiUrl = `${baseUrl}${url}`
  // }
  // else {
  //   const apiUrl = `${url}`
  // }
  const apiUrl = bUrl ? `${baseUrl}${url}` : `${url}`



  try {
    headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    const response = await axios({
      method: method,
      url: apiUrl,
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


