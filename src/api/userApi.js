import 'whatwg-fetch';

export function getUsers() {
  return get('http://localhost:3000/users');
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
