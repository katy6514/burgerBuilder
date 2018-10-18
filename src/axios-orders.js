import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-59df5.firebaseio.com/'
});

export default instance;
