import styled from 'styled-components';

export const Container = styled.div`
  font-weight: italic;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5% 25%;
  text-align: center;
`;

export const TrademarkInfo = styled.i`
  font-family: 'Segoe UI';
  text-align: left;
  padding: 2% ;
  line-height: 1.8;
  font-size: 1em;
  color: #3E3B47;
`;

export const Logo = styled.img`
  width: clamp(20%, 250px, 30%);
  margin-top: 5%;
`;