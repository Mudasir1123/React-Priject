import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Style from './ProfileStatus.module.css'
function ProfileStats() {
  const [stats, setStats] = useState({
    tweets: 0,
    following: 0,
    followers: 0,
    likes: 0
  });

  useEffect(() => {
    // Fetch data from backend API
    axios.get('/api/stats')
      .then(response => {
        setStats(response.data);
      })
      .catch(error => {
        console.error('Error fetching stats:', error);
      });
  }, []);

  return (
    <div className={Style.Menu}> 
    <div className={Style.child}>
<div>
        <h4>Tweets</h4>
        <p>{stats.tweets}</p>
      </div>
      <div> 
        <h4>Following</h4>
        <p>{stats.following}</p>
      </div>
      <div>
        <h4>Followers</h4>
        <p>{stats.followers}</p>
      </div>
      <div>
        <h4>Likes</h4>
        <p>{stats.likes}</p>
      </div>
      </div>
    </div>
  );
}

export default ProfileStats;
