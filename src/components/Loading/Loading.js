import styled from 'styled-components';

export default function Loading() {
  return (
    <LoadingStyle>
      <LoadingImage alt="로딩" src="/images/loading.gif" />
      <LoadingP>Loading</LoadingP>
    </LoadingStyle>
  );
}

const LoadingStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  text-align: center;
`;

const LoadingImage = styled.img`
  position: absolute;
  width: 50px;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
`;

const LoadingP = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100px;
  height: 20px;
  margin: auto;
  font-size: 0.825rem;
  color: ${({ theme }) => theme.wegaboxPurple};
`;
