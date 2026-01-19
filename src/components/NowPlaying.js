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
        <div className="top-tracks-header" style={{ display: 'flex', alignItems: 'center'}}>
          <span class="reclisten">currently listening to...</span>
        </div>
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          {recentlyPlayed.tracks.map((track, index) => (
            <div key={index} className="track-item" style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '12px', flex: '1 1 auto', minWidth: '100px', maxWidth: '200px'}}>
              {track.albumImageUrl && (
                <img 
                  src={track.albumImageUrl} 
                  alt={`${track.album} album cover`}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '0px',
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
                style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'left', marginTop: '14px'}}
              >
                <span className="song-title">{track.title}</span>
                <span className="song-artist">by {track.artist}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
