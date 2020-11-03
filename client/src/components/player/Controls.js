import styled from 'styled-components';
import theme from '../../styled/theme';
import Time from './Time';
import Play from './icons/Pause';
import Pause from './icons/Play';
import Prev from './icons/Prev';
import Next from './icons/Next';

const StyledControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0.2rem;
`;

const Icons = styled.div`
  margin-top: 1rem;
  /* fix text cursor inbetween icons */
  cursor: default;
`;

function Controls() {
  return (
    <StyledControls>
      <Time>0:00</Time>
      <Icons>
        <Prev fill={theme.colors.light} size="2rem" />
        <Play fill={theme.colors.light} size="2rem" />
        <Next fill={theme.colors.light} size="2rem" />
      </Icons>
      <Time>3:00</Time>
    </StyledControls>
  );
}

export default Controls;