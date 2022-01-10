import styled from 'styled-components';

export default function Main() {
  const Component = styled.div`
    color: ${props => props.theme.wegaboxPurple};
  `;

  return (
    <div>
      <Component>
        <span>test</span>
      </Component>
    </div>
  );
}
