import React, { useEffect, useState } from "react";
import "./Login.css";
import { UserInfo } from "./UserInfo";
import { useNavigate } from "react-router-dom";

  const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    //const [isLogined, setIsLogined] = useState(false)
    const navigate = useNavigate();
  
    const handleLogin = (event) => {
      event.preventDefault();

      const inputId = id.trim();
      const inputPassword = password.trim();

      const { id: storedId, password: storedPassword } = UserInfo;

// 로그인 상태 확인
/* useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const { id: storedId, password: storedPassword } = JSON.parse(storedUser);
    if (id === storedId && password === storedPassword) {
      setIsLogined(true);
    }
  }
}, [id, password]);

    const handleLogin = (event) => {
      event.preventDefault(); 
  
      const inputId = id.trim();
      const inputPassword = password.trim();
  
      const { id: storedId, password: storedPassword } = UserInfo;
  
      if (inputId === storedId && inputPassword === storedPassword) {
        // 로그인 성공
        localStorage.setItem("user", JSON.stringify({ id: inputId, password: inputPassword }));
      setIsLogined(true);
      } else {
        // 로그인 실패(아이디, 패스워드 안맞음)
        alert("로그인 실패: ID 또는 비밀번호가 잘못되었습니다.");
      }
    };

    useEffect(() => {
      if (isLogined) {
        navigate('/intro')
      }
    }, [isLogined, navigate]) */


    
        if (inputId === storedId && inputPassword === storedPassword) {
          // 로그인 성공 시 로컬 스토리지에 사용자 정보 저장
          localStorage.setItem("isLoggedIn", "true");
          navigate("/intro");
        } else {
          // 로그인 실패(아이디, 패스워드 안맞음)
          alert("로그인 실패: ID 또는 비밀번호가 잘못되었습니다.");
        }
      };


  return (
    <div className="wrapper_box">
      <h2>LOG IN</h2>
      <form className="login_form" onSubmit={handleLogin}>
        <input type="text" className="login_input" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
        <input placeholder="Password" type="Password" className="login_input" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className="login_btn">
          Login
        </button>`
      </form>
    </div>
  );
};

export default Login;