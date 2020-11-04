const express = require('express');
const app = express();
const axios = require('axios');
const btoa = require('btoa');

const CLIENT_ID = 'd9c317f2ee2f44d6b1a943f56999299e';
const CLIENT_SECRET = 'ed6758fd58a144359a9482b1f1bada89';

const port = 5000;
let token;

// Get token
getToken(CLIENT_ID, CLIENT_SECRET)
  .then(res => token = res);

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Search endpoint
app.get('/api/search/:query', async (req, res) => {
  console.log('received search request');
  const artists = await searchArtist(req.params.query, token, 5);

  console.log(artists);
  if (artists.length > 0)
    res.json(artists);
})

async function getToken(clientId, clientSecret) {
  const config = {
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: 'grant_type=client_credentials'
  };

  const res = await axios(config);
  
  return res.data.access_token;
}

async function searchArtist(query, token, limit = 3, offset = 0) {
  const config = {
    method: 'get',
    url: `https://api.spotify.com/v1/search?q=${query}&type=artist&limit=${limit}&offset=${offset}`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  const res = await axios(config);

  return res.data.artists.items;
}