const express = require('express');
const querystring = require('querystring');
const axios = require('axios');

const app = express();
const port = 8888;

// Replace these with your actual values
const CLIENT_ID = '361d7805f85e44ac84012ad8041e6502';
const CLIENT_SECRET = '594ffa251ba044d59c4b68b9af52e54f';
const REDIRECT_URI = 'http://localhost:8888/callback';

app.get('/login', (req, res) => {
  const scope = 'user-read-currently-playing user-read-playback-state';
  
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: CLIENT_ID,
      scope: scope,
      redirect_uri: REDIRECT_URI,
    }));
});

app.get('/callback', async (req, res) => {
  const code = req.query.code || null;
  
  try {
    const response = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
      }),
      headers: {
        'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    
    console.log('Refresh Token:', response.data.refresh_token);
    res.send(`
      <h1>Success!</h1>
      <p>Your refresh token is: <code>${response.data.refresh_token}</code></p>
      <p>Copy this token to your .env file</p>
    `);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.send('Error getting token');
  }
});

app.listen(port, () => {
  console.log(`Go to http://localhost:${port}/login to get your refresh token`);
}); 