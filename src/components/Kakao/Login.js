import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Login = props => {
  const [isLogin, setIsLogin] = useState(false);

  const userToken = localStorage.getItem('token');

  const KakaoLogout = () => {
    localStorage.removeItem('token');

    setIsLogin(false);
    alert('로그아웃 되었습니다.');
  };

  useEffect(() => {
    setIsLogin(userToken !== null);
  });

  return (
    <Menu>
      <button> {!isLogin ? '회원가입' : ''}</button>
      {!isLogin ? (
        <LoginLink href={process.env.REACT_APP_KAKAO_LOGIN_URL}>
          <button>로그인</button>
        </LoginLink>
      ) : (
        <button onClick={KakaoLogout}>로그아웃</button>
      )}
    </Menu>
  );
};

const Menu = styled.ul`
  display: flex;
  button {
    padding-right: 60px;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
`;

const LoginLink = styled.a`
  display: flex;
  button {
    padding-right: 60px;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
`;

export default Login;
