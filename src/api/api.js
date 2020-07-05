const readAll = () => {
    return fetch('/.netlify/functions/all_albums').then((response) => {
      return response.json()
    })
  }

export default {
    readAll : readAll
}
