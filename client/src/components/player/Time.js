import styled from 'styled-components';

const StyledTime = styled.p`

`;

function Time({ children }) {
  return (
    <StyledTime>{children}</StyledTime>
  );
}

export default Time;