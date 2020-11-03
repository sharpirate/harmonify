import styled, { css } from 'styled-components';
import theme from '../styled/theme';

const selectedStyle = css`
  background: ${theme.colors.primary};
  margin: 0;
  transition: none;
  transform: scale(${theme.record.scaleFactor});
  transform-origin: top center;

  margin-bottom: ${theme.record.size * (theme.record.scaleFactor - 1)}px;
`;

const defaultStyle = css`
  margin: 0 ${theme.record.gap}rem;
  transition: transform 0.3s ease;
  :hover {
    background: ${theme.colors.primary};
    transform: scale(1.1);
  }
`;

const StyledRecord = styled.div`
  width: ${theme.record.size}px;
  height: ${theme.record.size}px;
  border-radius: ${theme.radius};
  border: 1px solid ${theme.colors.light};
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => props.selected ? selectedStyle : defaultStyle};
`;

const RecordImg = styled.img`
  border-radius: 50%;
  height: 50%;
  margin: 1rem;
`;

const RecordName = styled.p`
  color: ${theme.colors.light};
  font-size: ${theme.record.size * 0.08}px;
`;

function Record({ img, name, selected }) {
  return (
    <StyledRecord selected={selected}>
      <RecordImg src={img} draggable="false" />
      <RecordName>{name}</RecordName>
    </StyledRecord>
  );
}

export default Record;