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
    <FooterWrapper>
      <FooterTop>
        <InnerWrap>
          <FooterTags>
            {FOOTER_TAGS.map((tags, idx) => {
              return (
                <FooterATags key={idx}>
                  <button href="/">{tags}</button>
                </FooterATags>
              );
            })}
          </FooterTags>
          <FindTheater>극장찾기</FindTheater>
        </InnerWrap>
      </FooterTop>
      <FooterMain>
        <InnerWrap>
          <FooterCi>
            <img src="/images/logoGrey.jpeg" alt="로고" />
          </FooterCi>
          <FooterInfo>
            <p>서울 강남구 테헤란로 427 위워크 ARS 1234-1234</p>
            <p>
              대표자명 위코드 · 개인정보보호책임자 위코드 · 사업자등록번호
              111-11-1111 · 통신판매업신고번호 제 1111-서울선릉-1234 호
            </p>
            <p>COPYRIGHT © Wegabox, Imc. All rights reserved</p>
          </FooterInfo>
          <FooterMainIcons>
            <SocialIcon>
              <a href="#!">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a href="#!">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a href="#!">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a href="#!">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </SocialIcon>
          </FooterMainIcons>
        </InnerWrap>
      </FooterMain>
    </FooterWrapper>
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

const FooterWrapper = styled.div`
  min-width: 1200px;
  width: 100%;
  height: 200px;
  bottom: 0;
  text-align: left;
  background-color: #f8f8fa;
`;

const FooterTop = styled.section`
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
`;

const InnerWrap = styled.article`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
`;

const FooterTags = styled.ul`
  display: flex;
`;

const FooterATags = styled.li`
  margin-right: 15px;
  line-height: 30px;
  color: #666;
  font-size: 0.8667em;
`;

const FindTheater = styled.button`
  width: 105px;
  height: 30px;
  padding: 0;
  line-height: 30px;
  color: #666;
  border: 1px solid #d8d9db;
  border-radius: 30px;
`;

const FooterMain = styled.section`
  width: 1200px;
  margin: 0 auto;
  padding: 0;
`;

const FooterCi = styled.div`
  margin-right: 15px;

  img {
    width: 80px;
  }
`;

const FooterInfo = styled.div`
  font-size: 13px;
  line-height: 1.5;
  margin-right: 15px;
`;

const FooterMainIcons = styled.article`
  display: flex;
  align-items: center;
  right: 0;
  padding-left: 20px;
  font-size: 20px;
`;

const SocialIcon = styled.div`
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
`;
