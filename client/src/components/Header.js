import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  padding-top: 5rem;
  margin-bottom: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header({ children }) {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  );
}

export default Header;