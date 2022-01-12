// import reactDom from 'react-dom';
import styled from 'styled-components';
// import { css } from 'styled-components';

import { FaBars, FaSearch, FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

export default function Nav() {
  return (
    <Navigator>
      <Navwrapper>
        <Navmain>
          <Menuwrapper>
            <Menusubwrapper>
              <Iconbutton>
                <FaBars />
              </Iconbutton>
              <Iconbutton>
                <FaSearch />
              </Iconbutton>
              <Menu>
                {LeftMenuList.map((menu, idx) => {
                  return (
                    <Leftmenu key={idx}>
                      <button>{menu.name}</button>
                    </Leftmenu>
                  );
                })}
              </Menu>
            </Menusubwrapper>
            <Ci>
              <a href="/">
                <img src="/images/logo.jpeg" alt="로고" />
              </a>
            </Ci>
            <Menusubwrapper>
              <Menu>
                {RightMenuList.map((menu, idx) => {
                  return (
                    <Rightmenu key={idx}>
                      <button>{menu.name}</button>
                    </Rightmenu>
                  );
                })}
              </Menu>
              <Iconbutton>
                <FaCalendarAlt />
              </Iconbutton>
              <Iconbutton>
                <FaUserAlt />
              </Iconbutton>
            </Menusubwrapper>
          </Menuwrapper>
        </Navmain>
        <Navbottom>navBottom</Navbottom>
      </Navwrapper>
    </Navigator>
  );
}

const LeftMenuList = [
  {
    name: '영화',
    subcategories: ['전체영화', 'N스크린', '큐레이션', '무비포스트'],
  },
  {
    name: '예매',
    subcategories: ['빠른예매', '상영시간표', '더 부티크 프라이빗 예매'],
  },
];

const RightMenuList = [
  {
    name: '회원가입',
    subcategories: ['진행중 이벤트', '지난 이벤트', '당첨자발표'],
  },
  {
    name: '로그인',
    subcategories: ['메가박스 멤버십', '제휴/할인'],
  },
];

const Navigator = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  top: 0;
  background-color: #362361;
`;

const Navwrapper = styled.div`
  position: relative;
`;

const Navmain = styled.main`
  width: 1200px;
  margin: 0 auto;
  color: white;
`;

const Menuwrapper = styled.section`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
`;

const Menusubwrapper = styled.article`
  display: flex;
`;

const Iconbutton = styled.button`
  border: 0;
  outline: none;
  font-size: 22px;
  padding: 0 9px;
  margin-top: 5px;
  color: white;
`;

const Menu = styled.ul`
  display: flex;
  align-items: start;

  button {
    /* padding-right: 45px; */
    padding-left: 45px;
    margin: 22.5px 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
`;

const Leftmenu = styled.li`
  position: relative;
  margin-left: 45px;
  padding-top: 5px;
  padding-bottom: 10px;
  justify-content: space-between;
`;

const Ci = styled.div`
  img {
    width: 130px;
    position: absolute;
    left: 50%;
    transform: translate(-60%);
    top: 7px;
  }
`;

const Rightmenu = styled.li`
  position: relative;
  margin-right: 52px;
  padding-top: 5px;
  padding-bottom: 10px;
`;

const Navbottom = styled.section`
  height: 41px;
  background-color: #d1cca1;
  border-top: 1px solid black;
`;
