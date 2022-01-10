import styled from 'styled-components';

export default function Main() {
  return (
    <div>
      <Component>
        <span>test</span>
      </Component>
    </div>
  );
  const Component = styled.div`
    color: ${props => props.theme.wegaboxPurple};
  `;
}
