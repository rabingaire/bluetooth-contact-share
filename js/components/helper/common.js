import {
  AsyncStorage
} from 'react-native';

const rootEndPoint = `http://bch-app-beta.azurewebsites.net/`;

export async function HTTP(uri, method, payload) {
  const params = {
    method: method,
    headers: {
    'Content-Type': 'application/json',
    }
  }

  if (payload) {
    params.body = JSON.stringify(payload);
  }
  const url = `${rootEndPoint}${uri}`;
  const response = await fetch(url, params);
  return response;

}

export async function setItem(key, data) {
  const response = await AsyncStorage.setItem(key,JSON.stringify(data));
  return response;
}

export async function getItem(key) {
  const data = await AsyncStorage.getItem(key);
  const response = JSON.parse(data);
  return response;
}

export async function removeItem(key) {
  const response = await AsyncStorage.removeItem(key);
  return response;
}
