const express = require('express');
const querystring = require('querystring');
const axios = require('axios');

const app = express();
const port = 888;

// Replace these with your actual Spotify app credentials
const CLIENT_ID = process.env.GATSBY_SPOTIFY_CLIENT_ID || '361d7805f85e44ac84012ad8041e6502';
const CLIENT_SECRET = process.env.GATSBY_SPOTIFY_CLIENT_SECRET || '594ffa251ba044d59c4b68b9af52e54f';
const REDIRECT_URI = `http://127.0.0.1:${port}/callback`;

console.log('Starting Spotify token generation server...');
console.log('Make sure you have added http://127.0.0.1:888/callback to your Spotify app redirect URIs');
console.log('Client ID:', CLIENT_ID);

app.get('/login', (req, res) => {
  const scope = 'user-read-currently-playing user-read-playback-state user-top-read user-read-recently-played';
  
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
  
  if (!code) {
    res.send('<h1>Error</h1><p>No authorization code received</p>');
    return;
  }
  
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
    
    console.log('\n=== SUCCESS ===');
    console.log('Access Token:', response.data.access_token);
    console.log('Refresh Token:', response.data.refresh_token);
    console.log('Expires in:', response.data.expires_in, 'seconds');
    
    res.send(`
      <h1>Success!</h1>
      <p><strong>Your refresh token is:</strong></p>
      <code style="background: #f0f0f0; padding: 10px; display: block; margin: 10px 0;">${response.data.refresh_token}</code>
      <p>Copy this refresh token and replace "your_actual_refresh_token_here" in your .env.development file</p>
      <p><strong>Access token (expires in 1 hour):</strong></p>
      <code style="background: #f0f0f0; padding: 10px; display: block; margin: 10px 0;">${response.data.access_token}</code>
      <p>You can close this window now.</p>
    `);
  } catch (error) {
    console.error('Error getting token:', error.response?.data || error.message);
    res.send(`
      <h1>Error</h1>
      <p>Failed to get token: ${error.response?.data?.error_description || error.message}</p>
      <p>Check the console for more details.</p>
    `);
  }
});

app.get('/', (req, res) => {
  res.send(`
    <h1>Spotify Token Generator</h1>
    <p>Click the link below to authorize your Spotify account:</p>
    <a href="/login" style="background: #1db954; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Login with Spotify</a>
    <p style="margin-top: 20px; color: #666;">Make sure you have added <code>http://127.0.0.1:888/callback</code> to your Spotify app's redirect URIs.</p>
  `);
});

app.listen(port, () => {
  console.log(`\nServer running at http://127.0.0.1:${port}`);
  console.log(`Go to http://127.0.0.1:${port} to get your refresh token\n`);
});
