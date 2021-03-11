import styled from 'styled-components';
import Logo from './Logo';
import Search from './search/Search';
import theme from '../styled/theme';

const StyledHeader = styled.header`
  position: relative;
  padding-top: 5rem;
  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${theme.breakpoints.staticLogo} {
    padding-top: 2rem;
  }
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