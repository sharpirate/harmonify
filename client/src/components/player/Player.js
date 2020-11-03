import styled from 'styled-components';
import theme from '../../styled/theme';
import Title from './Title';
import Range from './Range';
import Controls from './Controls';

const StyledPlayer = styled.div`
  color: ${theme.colors.light};
  background: ${theme.colors.primary};
  padding: 1rem 2rem;

  margin-top: 5rem;
  border-radius: ${theme.radius};
`;

function Player() {
  return (
    <StyledPlayer>
      <Title>Aerosmith - Amaizing</Title>
      <Range />
      <Controls />
    </StyledPlayer>
  );
}

export default Player;