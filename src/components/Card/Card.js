import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 10px;
  font-size: 16px;
  border: 4px solid black;
  margin-bottom: 20px;
  background-color: white;
`;

function Card({ children }) {

  return (
    <Container>
      {children ?? 'No children!'}
    </Container>
  )
}

export default Card;