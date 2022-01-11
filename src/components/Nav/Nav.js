import reactDom from 'react-dom';
import styled, { css } from 'styled-components';
import { FaBars, FaSearch, FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

export default function Nav() {
  return (
    <Navigator>
      <Navmain>
        {/* <section className="navUpper">navUpper</section> */}
        <Menuwrapper>
          <Menusubwrapper>
            <Button>
              <FaBars />
            </Button>
            <Button>
              <FaSearch />
            </Button>
            <Menu>
              {LeftMenuList.map((menu, idx) => {
                return (
                  <Leftmenu key={idx}>
                    <div>{menu.name}</div>
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
                    <div>{menu.name}</div>
                  </Rightmenu>
                );
              })}
            </Menu>
            <Button>
              <FaCalendarAlt />
            </Button>
            <Button>
              <FaUserAlt />
            </Button>
          </Menusubwrapper>
        </Menuwrapper>
      </Navmain>
      <Navbottom>navBottom</Navbottom>
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
  position: absolute;
  max-height: 150vh;
  position: fixed;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Navmain = styled.main`
  position: relative;
  min-width: 1100px;
  border-bottom: 1px solid black;
`;

const Menuwrapper = styled.section`
  margin: 0 auto;
  /* width: 100%; */
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  /* background-color: #b8d5e3; */
`;

const Menusubwrapper = styled.article`
  display: flex;
`;

const Button = styled.button`
  border: 0;
  outline: none;
  color: #666666;
  font-size: 22px;
  padding: 0 9px;
  margin-top: 5px;
`;

// ${props => props.mixin.flexCenter};
const Menu = styled.ul`
  display: flex;
  align-items: start;
  padding-right: 45px;
  padding-left: 45px;
  margin: 25px 0;
  height: 46px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #666666;
`;

const Leftmenu = styled.li`
  position: relative;
  margin-left: 45px;
  padding-top: 5px;
  padding-bottom: 10px;
  /* background-color: red; */
  justify-content: space-between;
`;

const Ci = styled.div`
  a {
    color: #666666;
    font-size: 25px;
    font-weight: 400;
    img {
      height: 100px;
      width: 160px;
      position: absolute;
      left: 50%;
      transform: translate(-60%);
      top: 7px;
    }
  }
`;

const Rightmenu = styled.li`
  position: relative;
  margin-right: 52px;
  padding-top: 5px;
  padding-bottom: 10px;
`;

const Navbottom = styled.section`
  height: 40px;
  /* background-color: #d1cca1; */
`;
