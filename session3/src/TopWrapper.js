import React from 'react';
import Profile from './Profile';

const TopWrapper = () => {
  return (
    <div id="top-wrap">
      <Profile />
      <div id="textBox" className="contentWrap">
        <p id="MyInfo">
            <h3>내 정보</h3>
            <span>명지대학교</span>
            <span>정보통신공학과</span>
            <span>3학년</span>
            <span>60211900</span>
            <span>김서현</span>
        </p>
      </div>
    </div>
  );
}

export default TopWrapper;
