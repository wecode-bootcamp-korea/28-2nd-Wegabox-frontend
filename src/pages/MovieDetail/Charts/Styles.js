import styled from 'styled-components';

export const ChartStyle = styled.div`
  width: 275px;
  height: 320px;
  padding: 16px 28px;
  border: 1px solid #ededed;
`;

export const ChartCanvas = styled.div`
  position: relative;
  height: 200px;
`;

export const ReviewRate = styled.p`
  position: absolute;
  width: 20px;
  font-size: 2.5rem;
  top: 45%;
  left: 36%;
  color: ${({ theme }) => theme.whiteColor};
`;

export const ChartTitle = styled.p`
  margin-bottom: 16px;
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.fontDarkBlack};
`;

export const ChartMaxInfo = styled.p`
  padding-bottom: 16px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.wegaboxPurple};
`;
