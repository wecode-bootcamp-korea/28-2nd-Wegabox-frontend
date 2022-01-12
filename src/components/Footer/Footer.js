import styled from 'styled-components';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <Footerwrapper>
      <Footertop>
        <Innerwrap>
          <Footertags>
            {FOOTER_TAGS.map((tags, idx) => {
              return (
                <Footeratags key={idx}>
                  <button href="/">{tags}</button>
                </Footeratags>
              );
            })}
          </Footertags>
          <Findtheater>극장찾기</Findtheater>
        </Innerwrap>
      </Footertop>
      <Footermain>
        <Innerwrap>
          <Footerci>
            <img src="/images/logoGrey.jpeg" alt="로고" />
          </Footerci>
          <Footerinfo>
            <p>서울 강남구 테헤란로 427 위워크 ARS 1234-1234</p>
            <p>
              대표자명 위코드 · 개인정보보호책임자 위코드 · 사업자등록번호
              111-11-1111 · 통신판매업신고번호 제 1111-서울선릉-1234 호
            </p>
            <p>COPYRIGHT © Wegabox, Imc. All rights reserved</p>
          </Footerinfo>
          <Footermainicons>
            <div>
              <a href="#!">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div>
              <a href="#!">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>

            <div>
              <a href="#!">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div>
              <a href="#!">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </Footermainicons>
        </Innerwrap>
      </Footermain>
    </Footerwrapper>
  );
}

const FOOTER_TAGS = [
  '회사소개',
  '인재채용',
  '사회공헌',
  '제휴/광고/부대사업문의',
  '이용약관',
  '위치기반서비스 이용약관',
  '개인정보처리방침',
  '윤리경영',
];

const Footerwrapper = styled.div`
  display: block;
  min-width: 1200px;
  width: 100%;
  height: 200px;
  bottom: 0;
  text-align: left;
  background-color: #f8f8fa;

  /* background-color: coral; */
`;

const Footertop = styled.section`
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
  /* background-color: cyan; */
`;

const Innerwrap = styled.article`
  display: flex;
  width: 1200px;
  margin: 0 auto;
`;

const Footertags = styled.ul`
  display: flex;
  flex: auto;
`;

const Footeratags = styled.li`
  display: block;
  margin-right: 15px;
  color: #666;
  line-height: 30px;
  font-size: 0.8667em;
`;

const Findtheater = styled.button`
  width: 105px;
  height: 30px;
  margin-right: 40px;
  padding: 0;
  line-height: 30px;
  color: #666;
  border: 1px solid #d8d9db;
  border-radius: 30px;
`;

const Footermain = styled.section`
  flex: auto;
  width: 1200px;
  margin: 0 auto;
  padding: 0;
  /* background-color: darkorange; */
`;

const Footerci = styled.div`
  flex: auto;
  img {
    width: 80px;
  }
`;

const Footerinfo = styled.div`
  flex: auto;
  font-size: 13px;
  line-height: 1.5;
`;

const Footermainicons = styled.article`
  display: flex;
  font-size: 20px;
  flex: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  div {
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid #f8f8fa;
    border-radius: 50%;
    text-align: center;
    background-color: #a8a8a8;
    margin: 0 10px;
    a {
      align-items: center;
      color: white;
    }
  }
`;
