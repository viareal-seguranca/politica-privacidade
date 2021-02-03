import styled from 'styled-components';

export const Section = styled.div`
  padding: 5% 5%;
  margin: 5% 15%;
  background-color: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Segoe UI';
  text-align: center;
  text-transform: uppercase;
  font-size: 1.3em;
  color: #3E3B47;
  margin-bottom: 5%;
`;

export const Subtitle = styled.h3`
  font-family: 'Segoe UI';
  text-align: left;
  font-size: 1em;
  color: #3E3B47;
  margin: 5%;
`;

export const Paragraph = styled.p`
  font-family: 'Segoe UI';
  text-align: left;
  padding: 2% ;
  line-height: 1.8;
  font-size: 1em;
  color: #3E3B47;
  margin: 5%, 0%;
`;

export const MainSection = styled.div`
  background-color: #E5E5E5;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 0;
  padding: 0;
`;

export const List = styled.ul`
  font-family: 'Segoe UI';
  text-align: left;
  padding: 2% ;
  line-height: 1.8;
  font-size: 1em;
  color: #3E3B47;
`;

export const Item = styled.li`
  margin-bottom: 3%;
`;