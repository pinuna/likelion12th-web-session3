import logo from './logo.svg';
import './App.css';
import TopWrapper from './TopWrapper'; 

function App() {
  return (
    <div className="container">
        <h2>김서현의 자기소개</h2>
        <div className="ProfilePicture">
            <h3>프로필 사진</h3>
            <img src="https://img.freepik.com/free-photo/asian-woman-relaxing-at-home_23-2148976932.jpg?w=1060&t=st=1709744711~exp=1709745311~hmac=365ad846746320f5a897d0d24b6ac9115857071126fc436ad4d35baef81724ab" alt="Profile Picture"/>
        <h6>(임의의 사진으로 대체)</h6>
        </div>
        <div className="MyInfo">
            <h3>내 정보</h3>
            <span>명지대학교</span>
            <span>정보통신공학과</span>
            <span>3학년</span>
            <span>60211900</span>
            <span>김서현</span>
        </div>

        <div className="keyword">
            <h3>나를 표현하는 4가지 키워드</h3>
            <ul>
                <li>성실함</li>
                <li>진솔함</li>
                <li>생각</li>
                <li>창의력</li>
            </ul>
        </div>
        <div className="value">
            <h3>가족 구성원</h3>
            <ol>
                <li>어머니</li>
                <li>아버지</li>
                <li>파이(강아지)</li>
            </ol>
        </div>
        <div className="favorite">
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

        <div className="MyLink">
            <a href="tel:01066032073">
                <img src="https://cdn.icon-icons.com/icons2/2719/PNG/512/phone_call_icon_175004.png" alt="전화"/>
            </a> 
            <a href="mailto:lsabella0104@naver.com">
                <img src="https://cdn.icon-icons.com/icons2/2182/PNG/512/mail_message_email_letter_icon_133481.png" alt="문자"/>
            </a>
        </div>
        
        <TopWrapper />

    </div>
  );
}

export default App;
