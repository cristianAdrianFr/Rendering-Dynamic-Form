const API_HOST = process.env.REACT_APP_API_HOST;

export const getUserListService = () => {
  return fetch(`${API_HOST}/v1/users`, {
    method: 'GET',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(error => {
      throw (error);
    })
};

export const uploadPhotoService = () => {
  return fetch(``, {
    method: '',
    headers: {
    }
  })
    .then(response => response.json())
    .catch(error => {
      throw (error);
    })
};

export const searchUsersService = (searchText) => {
  return fetch(`${API_HOST}/v1/users/?q=${searchText}`, {
    method: 'GET',
    headers: {
    }
  })
    .then(response => response.json())
    .catch(error => {
      throw (error);
    })
};

export const getFormService = () => {
  return fetch(`${API_HOST}/v1/formData`, {
    method: 'GET',
    headers: {
    }
  })
    .then(response => response.json())
    .catch(error => {
      throw (error);
    })
};

export const submitFormService = (formData) => {
  return fetch(`${API_HOST}/v1/users`, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': '*/*'
    }
  })
    .then(response => response.json())
    .catch(error => {
      throw (error);
    })
};