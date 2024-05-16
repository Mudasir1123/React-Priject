import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import twitterImage from '../images/twitter.png'; // Import the Twitter image
import Style from './NewTweet.module.css'
function NewTweet() {
  const [textareaValue, setTextareaValue] = useState('');

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleTweet = () => {
    // Here you can handle the tweet submission logic
    console.log('Tweet:', textareaValue);
    // Clear the textarea after tweeting
    setTextareaValue('');
  };

  return (
    <>
      <div className={Style.tweet}>
        <div className={Style.tweet1}>
          <Image style={{ width: '180px', height: '180px' }} src={twitterImage} fluid />
          <textarea
            value={textareaValue}
            onChange={handleChange}
            placeholder="Enter your tweet here..."
            rows={4}
            cols={50}
          />
</div>
          <div>
            <Button variant="primary" onClick={handleTweet}>Tweet</Button>
          </div>
      </div>
    </>
  );
}

export default NewTweet;
