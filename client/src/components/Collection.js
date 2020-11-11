import styled from 'styled-components';
import theme from '../styled/theme';
import { recordTheme } from '../styled/recordTheme';
import { playingTrackTheme } from '../styled/recordTheme';
import chooseImage from '../utils/chooseImage';
import Item from './Item';

const StyledCollection = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.record.gap * 2}rem ${theme.record.gap}rem;

  background: ${theme.colors.primary};
  border-radius: ${theme.radius};
`;

function Collection({ items, type, trackId, defaultImg }) {
  return (
    <StyledCollection>
      {items.map(item => {
        const theme = (type === 'track' && trackId === item.id) ? playingTrackTheme : recordTheme;
        return (
          <Item
            item={item}
            type={type}
            theme={theme}
            key={item.id}
            img={chooseImage(item.images, defaultImg)}
          />
        );
      })}
    </StyledCollection>
  );
}

export default Collection;