import React from 'react';
import Profile from './Profile';

const TopWrapper = () => {
  return (
    <div id="top-wrap">
      <Profile />
      <div id="textBox" className="contentWrap">
        <p id="text">
          안녕하세요 좋은 하루 되세요 행복하시구요
        </p>
      </div>
    </div>
  );
}

export default TopWrapper;
