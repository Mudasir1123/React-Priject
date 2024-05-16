import React from 'react';
import Button from 'react-bootstrap/Button';
import Style from './ProfileInfo.module.css'
function ProfileInfo() {
  return (
    <div className={Style.info}> 
      <h2>Mudassir Hanif</h2>
      <p>@hanif</p>
      <p>Perth, WA</p>
      <p>Joined May 16, 2024</p>
      <Button variant="primary">Tweet to Mudassir Hanif</Button>
    </div>
  );
}

export default ProfileInfo;
