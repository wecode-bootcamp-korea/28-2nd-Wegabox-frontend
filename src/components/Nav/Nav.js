import styled from 'styled-components';

import KakaoLogin from '../Kakao/Login';
import { FaBars, FaSearch, FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

export default function Nav() {
  return (
    <Navigator>
      <NavWrapper>
        <NavMain>
          <MenuWrapper>
            <MenuSubWrapper>
              <IconButton>
                <FaBars />
              </IconButton>
              <IconButton>
                <FaSearch />
              </IconButton>
              <Menu>
                {LeftMenuList.map((menu, idx) => {
                  return (
                    <LeftMenu key={idx}>
                      <button>{menu.name}</button>g
                    </LeftMenu>
                  );
                })}
              </Menu>
            </MenuSubWrapper>
            <Ci>
              <a href="/">
                <img src="/images/logo.jpeg" alt="로고" />
              </a>
            </Ci>
            <MenuSubWrapper>
              <KakaoLogin />
              <IconButton>
                <FaCalendarAlt />
              </IconButton>
              <IconButton>
                <FaUserAlt />
              </IconButton>
            </MenuSubWrapper>
          </MenuWrapper>
        </NavMain>
      </NavWrapper>
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

const Navigator = styled.div`
  width: 100%;
  top: 0;
  background-color: #362361;
`;

const NavWrapper = styled.div`
  position: relative;
`;

const NavMain = styled.main`
  margin: 0 auto;
  color: white;
`;

const MenuWrapper = styled.section`
  min-width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-size: 30px;
`;

const MenuSubWrapper = styled.article`
  display: flex;
`;

const IconButton = styled.button`
  border: 0;
  outline: none;
  font-size: 22px;
  padding: 10px;
  margin-top: 5px;
  color: white;
`;

const Menu = styled.ul`
  display: flex;

  :nth-child(1) {
    button {
      justify-content: left;
    }
  }

  button {
    padding-left: 35px;
    margin: 22.5px 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
`;

const LeftMenu = styled.li`
  position: relative;
  margin-left: 45px;
  padding-top: 15px;
  padding-bottom: 20px;
`;

const Ci = styled.div`
  img {
    width: 130px;
    position: absolute;
    left: 50%;
    transform: translate(-60%);
    top: 17px;
  }
`;
