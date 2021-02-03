import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: clamp(1em, 1.3em, 1.3em);
  padding-top: 2%;
`;

export const HeaderTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #3E3B47;
  margin-top: 1%;
`;

export const Logo = styled.img`
  width: clamp(20%, 250px, 30%);
`;