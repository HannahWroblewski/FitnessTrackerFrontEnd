import axios from 'axios';
const BASE = 'https://fitnesstrac-kr.herokuapp.com/api'

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
        username: userName,
        password: password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(userName, password) {
  try {
    const {data} = await axios.post(`${BASE}/users/login`, {
        username: userName,
        password: password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createRoutine() {
  
  try {
    const { data } = await axios.post(
      `${BASE}/routines`,
      {
        routine: {
          info: info,
          info: info,
          info: info
        }
      },
      {
        headers: {
          "Content-Type": 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    throw error;
  }
}
export async function createActivity() {
  
  try {
    const { data } = await axios.post(
      `${BASE}/activities`,
      {
        activity: {
          info: info,
          info: info,
          info: info
        }
      },
      {
        headers: {
          "Content-Type": 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteRoutine(){
  
  try{
    
} catch(error){
  throw error
} finally{
  
}

}

export async function deleteActivity(){
  
  try{
    
} catch(error){
  throw error
} finally{
  
}

}