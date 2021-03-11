import styled from 'styled-components';
import logo from '../assets/svg/logo.svg';
import theme from '../styled/theme';

const StyledLogo = styled.img`
  position: fixed;
  z-index: 1;
  top: ${props => props.padding};
  left: ${props => props.padding};

  @media ${theme.breakpoints.staticLogo} {
    position: static;
    margin-bottom: 3rem;
  }
`;

function Logo() {
  return (
    <StyledLogo src={logo} alt="Harmonify" padding="1.5rem" draggable="false" />
  );
}

export default Logo;