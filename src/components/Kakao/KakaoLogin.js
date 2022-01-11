import qs from 'qs';
import { useEffect, useState } from 'react';

function KakaoLogin() {
  const params = new URLSearchParams(document.location.search);
  const code = params.get('code');

  const getToken = async () => {
    try {
      await fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        body: qs.stringify({
          grant_type: 'authorization_code',
          client_id: process.env.REACT_APP_CLIENT_ID,
          redirect_uri: 'http://localhost:3000/login_kakao',
          code: code,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          fetch('https://12d7-211-106-114-186.ngrok.io/users/login', {
            headers: { Authorization: data.access_token },
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              localStorage.setItem('token', data.token);
            });
        });
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    code && getToken();
  }, []);

  return null;
}

export default KakaoLogin;
