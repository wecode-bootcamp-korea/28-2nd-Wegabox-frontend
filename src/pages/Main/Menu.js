import { HiOutlineFilm } from 'react-icons/hi';
import { GrTicket } from 'react-icons/gr';
import styled from 'styled-components';

export default function Menu({ goToBoxOffice, goToTicketing }) {
  return (
    <>
      <MenuButton onClick={goToBoxOffice}>
        <HiOutlineFilm /> 박스오피스
      </MenuButton>
      <MenuButton onClick={goToTicketing}>
        <GrTicket /> 빠른예매
      </MenuButton>
    </>
  );
}

const MenuButton = styled.button`
  margin-top: 3rem;
  width: 200px;
  height: 65px;
  text-align: center;
  font-size: 1rem;
  color: ${props => props.theme.whiteColor};
  background-color: rgba(0, 0, 0, 0.2);

  &:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.3);
  }

  &:hover {
    text-decoration: underline;
  }

  path {
    stroke: ${props => props.theme.whiteColor};
  }
`;
