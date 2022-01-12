import styled from 'styled-components';
import mixin from '../../styles/Mixin';

export default function Main() {
  return (
    <Component>
      <span>Main</span>
    </Component>
  );
}
const { widthHeight } = mixin;
const Component = styled.div`
  ${widthHeight};
  box-sizing: border-box;
  width: 100%;
  height: 700px;

  /* margin-top: 130px; */
  /* margin-bottom: 30px; */
  background-color: white;
  color: ${props => props.theme.wegaboxPurple};
  font-size: 1.2rem;
`;
