// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

const ACCESS_TOKEN = process.env.GATSBY_SPOTIFY_ACCESS_TOKEN;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getNowPlaying = async () => {
  // Don't run during SSR
  if (!isBrowser) {
    return { isPlaying: false };
  }

  // Check if we have an access token
  if (!ACCESS_TOKEN) {
    console.log('No Spotify access token found');
    return { isPlaying: false };
  }

  try {
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    // If no content (nothing playing) or error
    if (response.status === 204 || response.status > 400) {
      if (response.status === 401) {
        console.log('Spotify token expired - get a new one from the console');
      }
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