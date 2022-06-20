import AsyncStorage from '@react-native-community/async-storage';

const BASE_API = "https://api.b7web.com.br/devbarber/api";

export default {
  checkToken: async (token) => {
    const request = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ token })
    });
    const json = await request.json();
    return json;
  },

  login: async (email, password) => {

    console.log("email", email);
    console.log("password", password);

    const request = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const json = await request.json();
    return json;
  },

  cadastrar: async (name, email, password) => {
    const request = await fetch(`${BASE_API}/user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await request.json();
    return json;
  },

  sairApp: async () => {
    const token = await AsyncStorage.getItem('token');
    const request = await fetch(`${BASE_API}/auth/logout`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ token })
    });
    const json = await request.json();
    return json;
  }
}