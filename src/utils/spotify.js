const isBrowser = typeof window !== 'undefined';

const CLIENT_ID = process.env.GATSBY_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.GATSBY_SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GATSBY_SPOTIFY_REFRESH_TOKEN;

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    console.error('Missing Spotify credentials in environment variables');
    return null;
  }

  if (REFRESH_TOKEN === 'your_actual_refresh_token_here') {
    console.error('Please replace the placeholder refresh token with your actual refresh token');
    return null;
  }

  const basic = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN,
      }),
    });

    if (!response.ok) {
      throw new Error(`Token refresh failed: ${response.status}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    return null;
  }
};

export const getTopTracks = async () => {
  if (!isBrowser) {
    return { hasData: false, tracks: [] };
  }

  try {
    const accessToken = await getAccessToken();
    
    if (!accessToken) {
      console.log('Could not get Spotify access token');
      return { hasData: false, tracks: [] };
    }

    const response = await fetch(`${TOP_TRACKS_ENDPOINT}?time_range=short_term&limit=3`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status > 400) {
      if (response.status === 401) {
        console.log('Spotify authentication failed - check your refresh token');
      }
      console.error(`Spotify API error: ${response.status}`);
      return { hasData: false, tracks: [] };
    }

    const data = await response.json();

    if (!data || !data.items || data.items.length === 0) {
      return { hasData: false, tracks: [] };
    }

    const tracks = data.items.map((track) => ({
      title: track.name,
      artist: track.artists.map((artist) => artist.name).join(', '),
      album: track.album.name,
      albumImageUrl: track.album.images[0]?.url,
      songUrl: track.external_urls.spotify,
    }));

    return {
      hasData: true,
      tracks: tracks,
    };
  } catch (error) {
    console.error('Error fetching top tracks:', error);
    return { hasData: false, tracks: [] };
  }
};

export const getNowPlaying = async () => {
  if (!isBrowser) {
    return { isPlaying: false };
  }

  try {
    const accessToken = await getAccessToken();
    
    if (!accessToken) {
      console.log('Could not get Spotify access token');
      return { isPlaying: false };
    }

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 204) {
      return { isPlaying: false };
    }

    if (response.status > 400) {
      if (response.status === 401) {
        console.log('Spotify authentication failed - check your refresh token');
      }
      console.error(`Spotify API error: ${response.status}`);
      return { isPlaying: false };
    }

    const song = await response.json();

    if (!song || !song.is_playing) {
      return { isPlaying: false };
    }

    return {
      isPlaying: true,
      title: song.item.name,
      artist: song.item.artists.map((artist) => artist.name).join(', '),
      album: song.item.album.name,
      albumImageUrl: song.item.album.images[0]?.url,
      songUrl: song.item.external_urls.spotify,
    };
  } catch (error) {
    console.error('Error fetching now playing:', error);
    return { isPlaying: false };
  }
};
