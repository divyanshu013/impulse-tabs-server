import fetch from 'node-fetch';

export default function fetchFromAPI(res, url, api) {
  fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then(json => res.send(json))
    .catch(() => (
      console.error(`Unexpected error fetching ${api}`)
    ));
}
