const API_HOST = process.env.REACT_APP_API_HOST;

export const loginService = (data) => {
  return fetch(`${API_HOST}/auth/obtain-token`, {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...data})
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw (error);
    })
};

export const getCandleStickDataService = () => {
  return fetch(`${API_HOST}/sys/backtests/6315/charts`, {
    method: 'GET',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw (error);
    })
};