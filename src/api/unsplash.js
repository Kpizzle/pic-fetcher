import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID W1GUkcs4D1bqXJGt3K83S-uttmc4SL3cclWTPsIogGc ",
      },
})