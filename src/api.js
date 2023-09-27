// api.js
//import axios
import axios from 'axios';

//define the api url
const API_URL = 'https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts';

//define the fetch post function where async keyword denots that this function will work with asynchronous code
export const fetchPosts = async () => {
  
  //we use an axios to make http get request to the API_URL.The await keyword is used to wait for response
  try {
    const response = await axios.get(API_URL);
    
    //extract the data from reponse.this data contains the JSON data returned by the server.
    return response.data;
  } catch (error) {
    throw error;
  }
};
