import styled from 'styled-components';
import Logo from './Logo';
import Search from './search/Search';

const StyledHeader = styled.header`
  position: relative;
  padding-top: 5rem;
  margin-bottom: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Search />
    </StyledHeader>
  );
}

export default Header;