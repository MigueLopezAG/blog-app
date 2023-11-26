import { IP_LOCAL } from '@env'
import axios from 'axios';
import { Alert } from 'react-native';
const BASE_URL = 'http://'+IP_LOCAL+':3001'; // Reemplazar con la URL de tu servicio REST
const API_VERSION = '/api/v1';
const URL_API = BASE_URL + API_VERSION;

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}

export const getEntries = async () => {
  return axios.get(`${URL_API}/entries`, headers)
    .then((response) => response.data.entries)
    .catch((error) => Promise.reject(error));
};

export const addEntry = async (entry) => {
  try{
    const response = await axios.post(`${URL_API}/entries`, entry)
    if(response.status === 200) {
      return response.data
    } else {
      Alert.alert(response.data.error);
      return false;
    }
  }catch (err) {
    Alert.alert("Ocurrio un error "+ err);
  }
};
