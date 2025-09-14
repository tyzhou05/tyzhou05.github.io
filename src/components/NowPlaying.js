import React, { useState, useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { getTopTracks } from '../utils/spotify';

const NowPlaying = () => {
  const [topTracks, setTopTracks] = useState({ hasData: false, tracks: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const data = await getTopTracks();
        setTopTracks(data);
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopTracks();
    
    // Refresh every 5 minutes (top tracks don't change as frequently)
    const interval = setInterval(fetchTopTracks, 300000);
    
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

  if (!topTracks.hasData || topTracks.tracks.length === 0) {
    return (
      <div className="now-playing">
        <FaSpotify className="spotify-icon" />
        <span>No top tracks available</span>
      </div>
    );
  }

  return (
    <div className="now-playing">
      <div className="top-tracks">
        <div className="top-tracks-header" style={{ display: 'flex', alignItems: 'center' }}>
          <FaSpotify className="spotify-icon" />
          <span style={{ marginLeft: '6px' }}>listening this month:</span>
        </div>
        {topTracks.tracks.map((track, index) => (
          <div key={index} className="track-item" style={{marginLeft: '2px'}}>
            <span className="track-number">{index + 1}) </span>
            <a 
              href={track.songUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="now-playing-link"
            >
              <span className="song-title">{track.title}</span>
              <span className="song-artist"> by {track.artist}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NowPlaying;
