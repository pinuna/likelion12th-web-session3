import logo from './logo.svg';
import './App.css';
import TopWrapper from './TopWrapper'; 

function App() {
  return (
    <>
    <div id="Wrapper">
        <h2 id="title">김서현의 자기소개</h2>
        <div className="ProfilePicture">
            <Like />
            <h3>프로필 사진</h3>
            <img src="https://img.freepik.com/free-photo/asian-woman-relaxing-at-home_23-2148976932.jpg?w=1060&t=st=1709744711~exp=1709745311~hmac=365ad846746320f5a897d0d24b6ac9115857071126fc436ad4d35baef81724ab" alt="Profile Picture"/>
        <h6>(임의의 사진으로 대체)</h6>
        </div>
    </>
        <div id="keyword">
        </div>
        <div id="value">
            <h3>가족 구성원</h3>
        </div>
        <div id="favorite">
            <h3>내가 좋아하는 것</h3>
        </div>

        <div id="MyLink">
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
