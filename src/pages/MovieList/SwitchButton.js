import styled from 'styled-components';

export default function SwitchButton({ isChecked, handleToggleCheckbox }) {
  return (
    <SwitchButtonStyle>
      <SwitchCheckbox
        id="onlyReleased"
        checked={isChecked}
        onChange={handleToggleCheckbox}
      />
      <SwitchLabel isChecked={isChecked} htmlFor="onlyReleased">
        <SwitchBall isChecked={isChecked} />
      </SwitchLabel>
      &nbsp;개봉작만 보기
    </SwitchButtonStyle>
  );
}

const SwitchButtonStyle = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 16px;
  text-align: left;
`;

const SwitchCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  vertical-align: text-top;
  width: 30px;
  height: 16px;
  border-radius: 50px;
  background-color: ${({ isChecked, theme }) =>
    isChecked ? theme.buttonBlue : '#b6b6b6'};
  transition: 0.2s ease-in-out;

  :hover {
    cursor: pointer;
  }
`;

const SwitchBall = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.whiteColor};
  border-radius: 50%;
  transform: translateX(${({ isChecked }) => (isChecked ? 14 : 0)}px);
  transition: 0.2s ease-in-out;
`;
