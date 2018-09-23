const API_HOST = process.env.REACT_APP_API_HOST;

export const userSettingApi = (values) => {
    return fetch(`${API_HOST}/v1/user-setting`, {
        method: 'POST',
        body: JSON.stringify({...values}),
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(error => {
            console.log('--------- error object ---------', error);
            throw (error);
        });
};