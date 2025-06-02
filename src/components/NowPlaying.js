import React, { useState, useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { getNowPlaying } from '../utils/spotify';

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState({ isPlaying: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const data = await getNowPlaying();
        setNowPlaying(data);
      } catch (error) {
        console.error('Error fetching now playing:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="now-playing">
        <FaSpotify className="spotify-icon" />
        <span>Loading...</span>
      </div>
    );
  }

  if (!nowPlaying.isPlaying) {
    return (
      <div className="now-playing">
        <FaSpotify className="spotify-icon" />
        <span>Not playing</span>
      </div>
    );
  }

  return (
    <div className="now-playing">
      <FaSpotify className="spotify-icon" />
      <a 
        href={nowPlaying.songUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="now-playing-link"
      >
        <span className="song-title">{nowPlaying.title}</span>
        <span className="song-artist"> by {nowPlaying.artist}</span>
      </a>
    </div>
  );
};

export default NowPlaying; 