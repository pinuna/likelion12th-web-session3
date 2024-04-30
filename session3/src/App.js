import './App.css';
import TopWrapper from './TopWrapper'; 

function App() {
  return (
    <div id="Wrapper">
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
export default App;