import React, { useState, useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { getRecentlyPlayed } from '../utils/spotify';

const NowPlaying = () => {
  const [recentlyPlayed, setRecentlyPlayed] = useState({ hasData: false, tracks: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      try {
        const data = await getRecentlyPlayed();
        setRecentlyPlayed(data);
      } catch (error) {
        console.error('Error fetching recently played tracks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentlyPlayed();
    
    // Refresh every second to keep recently played up to date
    const interval = setInterval(fetchRecentlyPlayed, 1000);
    
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

  if (!recentlyPlayed.hasData || recentlyPlayed.tracks.length === 0) {
    return (
      <div className="now-playing">
        <FaSpotify className="spotify-icon" />
        <span>No recently played tracks available</span>
      </div>
    );
  }

  return (
    <div className="now-playing">
      <div className="top-tracks">
        <div className="top-tracks-header" style={{ display: 'flex', alignItems: 'center' , paddingBottom: '4px'}}>
          <FaSpotify className="spotify-icon" />
          <span style={{ marginLeft: '4px' }}>recently listening:</span>
        </div>
        {recentlyPlayed.tracks.map((track, index) => (
          <div key={index} className="track-item" style={{display: 'flex', alignItems: 'center', lineHeight: '1.4', height: '20px'}}>
            {track.albumImageUrl && (
              <img 
                src={track.albumImageUrl} 
                alt={`${track.album} album cover`}
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '0px',
                  marginRight: '4px',
                  display: 'block',
                  flexShrink: 0
                }}
              />
            )}
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
