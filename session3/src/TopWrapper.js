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
      </div>
    </div>
  );
}

export default TopWrapper;
