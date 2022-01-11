import styled from 'styled-components';

export default function Main() {
  return (
    <div>
      <Component>
        <span>박스오피스</span>
      </Component>
    </div>
  );
}

const Component = styled.div`
  color: ${props => props.theme.wegaboxPurple};
  font-size: 1.2rem;
`;
