import styled from 'styled-components';
import theme from '../styled/theme';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin-bottom: 10rem;
`;

const Heading = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 2rem;
  letter-spacing: 2px;
  word-spacing: 5px;
  color: ${theme.colors.light};
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

function Section({ name, children, type="section"}) {
  return (
    <StyledSection as={type}>
      <Heading>{name}</Heading>
      {children}
    </StyledSection>
  );
}

export default Section;