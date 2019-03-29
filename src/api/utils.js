/**
* Generic fetch
*
* @return {object}         Promise object
*/

// Provide Basic Header Configurations
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const headersWithToken = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  token: "dae1665d-c4eb-4a4c-9a37-f4f3d52bcf36"
};

// Main Fetch Function
function doFetch(url, options) {
  return fetch(url, options)
    .then(response => response.json())
    .catch((error) => {
      console.log(error);
      console.log('From Utils', error);
    });
}

/*
* Generic get for rest
*/
export function doGet(url, needToken = false, tokenValue) {
  const options = {
    method: 'GET',
    // headers: headersWithToken,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: needToken ? tokenValue : ''
    }
  };
  return doFetch(url, options );
}

/*
 * Generic post for rest
 */
export function doPost(url, body, isJson = true, needToken = false, tokenValue) {
  const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: needToken ? tokenValue : ''
      },
      body: isJson ? JSON.stringify(body) : body,
  };
  return doFetch(url, options);
}

/*
 * Generic put for rest
 */
export function doPut(url, body, isJson=true, needToken = false, tokenValue) {
  const options = {
    method: 'PUT',
    //  headers: headersWithToken,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: needToken ? tokenValue : ''
    },
    body: isJson ? JSON.stringify(body) : body,
  };
  return doFetch(url, options,);
}

export function doDelete(url, body, isJson = true, needToken = false, tokenValue) {
  const options = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      token: needToken ? tokenValue : ''
    },
    body: isJson ? JSON.stringify(body) : body,
  };
  return doFetch(url, options);
}

export function getUrl(url = '', obj = {}) {
  const toPath = pathToRegexp.compile(url);
  return toPath(obj);
}
