import axios from 'axios';
const BASE = 'https://fitnesstrac-kr.herokuapp.com'

// this is an example of an api call with axios
// export async function getUsers() {
//   try {
//     const { data } = await axios.get(`${ BASE }/users`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

export async function getUsers() {
  const myToken = getToken()

  try {
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": 'application/json',
        'Authorization': `Bearer ${myToken}`
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export async function getCurrentUser() {
  const myToken = getToken();
  try {
    const {data} = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(userName, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      user: {
        username: userName,
        password: password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(userName, password) {
  try {
    const {data} = await axios.post(`${BASE}/users/login`, {
      user: {
        username: userName,
        password: password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}