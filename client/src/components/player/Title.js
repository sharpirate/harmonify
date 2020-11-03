import styled from 'styled-components';

const StyledTitle = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

function Title({ children }) {
  return (
    <StyledTitle>{children}</StyledTitle>
  );
}

export default Title;