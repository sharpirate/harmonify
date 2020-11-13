const express = require('express');
const app = express();
const axios = require('axios');
const btoa = require('btoa');

require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

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
  const artists = await searchArtist(req.params.query, token);

  if (artists.length > 0)
    res.json(artists);
});

// Top Tracks endpoint
app.get('/api/top-tracks/:id', async (req, res) => {
  const tracks = await getTopTracks(req.params.id, 5, token);
  res.json(tracks);
});

// Related Artists endpoint
app.get('/api/related-artists/:id', async (req, res) => {
  const artists = await getRelatedArtists(req.params.id, 5, token);
  console.log('related')
  res.json(artists);
});

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

async function getTopTracks(id, limit = 5, token) {
  const config = {
    method: 'get',
    url: `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  const res = await axios(config);
  return res.data.tracks.slice(0, limit);
}

async function getRelatedArtists(id, limit = 5, token) {
  const config = {
    method: 'get',
    url: `https://api.spotify.com/v1/artists/${id}/related-artists`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  const res = await axios(config);
  return res.data.artists.slice(0, limit);
}