const { Kakao } = window.Kakao;

export default function KakaoLogout() {
  Kakao.Auth.logout(function () {});
}
