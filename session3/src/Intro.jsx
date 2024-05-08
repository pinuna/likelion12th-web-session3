/*
import React from 'react';

import './intro.css';
import TopWrapper from './TopWrapper'; 

const Intro = () => {
  return (
    <div className="App">
        <h2 id="title">김서현의 자기소개</h2>
        <div id="ProfilePicture">
            <h3>프로필 사진</h3>
            <h6>(임의의 사진으로 대체)</h6>
        </div>
        <div id="keyword">
        </div>
        <div id="value">
            <h3>가족 구성원</h3>
        </div>
        <div id="favorite">
            <h3>내가 좋아하는 것</h3>
        </div>

        <div id="MyLink">
        </div>
        
        <TopWrapper />

    </div>
  );
}
export default Intro;


import React from 'react';
import './TopWrapper.css';
// import Profile from './Profile';

const TopWrapper = () => {
  return (
    <div id="top-wrap">
      <div id="textBox" className="contentWrap">
        <p id="MyInfo">
            <h3>내 정보</h3>
            <span>명지대학교</span>
            <span>정보통신공학과</span>
            <span>3학년</span>
            <span>60211900</span>
            <span>김서현</span>
        </p>
        <p id="ProfilePicture">
        <image src="https://img.freepik.com/free-photo/asian-woman-relaxing-at-home_23-2148976932.jpg?w=1060&t=st=1709744711~exp=1709745311~hmac=365ad846746320f5a897d0d24b6ac9115857071126fc436ad4d35baef81724ab" alt="Profile Picture"/>
        </p>
        <p id="keyword">
        <h3>나를 표현하는 4가지 키워드</h3>
            <ul>
                <li>성실함</li>
                <li>진솔함</li>
                <li>생각</li>
                <li>창의력</li>
            </ul>
        </p>
        <p id="value">
        <ol>
                <li>어머니</li>
                <li>아버지</li>
                <li>파이(강아지)</li>
            </ol>
        </p>
        <p id="favorite">
        <table>
                <thead>
                    <tr>
                        <th>음악</th>
                        <th>과일</th>
                        <th>취미</th>
                        <th>동물</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>밴드 음악</td>
                        <td>딸기</td>
                        <td>베이스 연주</td>
                        <td>강아지</td>
                    </tr>
                </tbody>
            </table>
        </p>
        <p id="MyLink">
        <a href="tel:01066032073">
                <img src="https://cdn.icon-icons.com/icons2/2719/PNG/512/phone_call_icon_175004.png" alt="전화"/>
            </a> 
            <a href="mailto:lsabella0104@naver.com">
                <img src="https://cdn.icon-icons.com/icons2/2182/PNG/512/mail_message_email_letter_icon_133481.png" alt="문자"/>
            </a>
        </p>
      </div>
    </div>
  );
}

export default TopWrapper;
*/

import React from 'react';
import './intro.css'; // Intro 컴포넌트에 관련된 CSS 파일 import


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/*
import Intro from './Intro';*/
import Main from './Main';

/*
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} /> 
        <Route path="/main" element={<Main />} /> 
      </Routes>
    </Router>
  );
}
*/


const Intro = () => {
  return (
    <div className="wrapper_box">
      <h2 id="title">김서현의 자기소개</h2>

      <div id="ProfilePicture">
        <h3>프로필 사진</h3>
        <h6>(임의의 사진으로 대체)</h6>
      </div>

      <div id="MyInfo">
        <h3>내 정보</h3>
        <p>명지대학교 정보통신공학과 3학년 60211900 김서현</p>
      </div>

      <div id="keyword">
        <h3>나를 표현하는 4가지 키워드</h3>
        <ul>
          <li>성실함</li>
          <li>진솔함</li>
          <li>생각</li>
          <li>창의력</li>
        </ul>
      </div>

      <div id="value">
        <h3>가족 구성원</h3>
        <ul>
          <li>어머니</li>
          <li>아버지</li>
          <li>파이(강아지)</li>
        </ul>
      </div>

      <div id="favorite">
        <h3>내가 좋아하는 것</h3>
        <table>
          <thead>
            <tr>
              <th>음악</th>
              <th>과일</th>
              <th>취미</th>
              <th>동물</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>밴드 음악</td>
              <td>딸기</td>
              <td>베이스 연주</td>
              <td>강아지</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Intro;