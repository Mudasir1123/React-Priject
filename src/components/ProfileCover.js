import React from 'react';
import Image from 'react-bootstrap/Image'; // Import Image from react-bootstrap
import coverphoto from '../images/coverphoto.jpg'; // Import the cover photo image
import twitter from '../images/twitter.png'; // Import the twitter image
import Style from './PrifileCover.module.css'
function ProfileCover() {
  return (
    <>
      <div className={Style.profile}>
        
        <Image src={coverphoto} fluid />
        <Image className={Style.cover} style={{ width: '310px', height: '310px'}} 
        src={twitter} fluid />
      </div>
    </>
  );
}

export default ProfileCover;
