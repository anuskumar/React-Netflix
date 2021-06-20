import axios from 'axios';
import {Base_Url} from './constants';


const instance = axios.create({
    baseURL: Base_Url,
    
  });

  export default instance;