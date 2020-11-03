import styled from 'styled-components';
import logo from '../assets/svg/logo.svg';

const StyledLogo = styled.img`
  position: fixed;
  z-index: 1;
  top: ${props => props.padding};
  left: ${props => props.padding};
`;

function Logo() {
  return (
    <StyledLogo src={logo} alt="Harmonify" padding="1.5rem" draggable="false" />
  );
}

export default Logo;