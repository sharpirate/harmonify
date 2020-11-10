// const selectedStyle = css`
//   background: ${theme.colors.primary};
//   margin: 0;
//   transition: none;
//   transform: scale(${theme.record.scaleFactor});
//   transform-origin: top center;

//   margin-bottom: ${theme.record.size * (theme.record.scaleFactor - 1)}px;
// `;

// const defaultStyle = css`
//   margin: 0 ${theme.record.gap}rem;
//   transition: transform 0.3s ease;
//   :hover {
//     background: ${theme.colors.primary};
//     transform: scale(1.1);
//   }
// `;

import { css } from 'styled-components';
import theme from './theme';

export const RecordStyle = css`
  width: ${theme.record.size}px;
  height: ${theme.record.size}px;
  border-radius: ${theme.radius};
  border: 1px solid ${theme.colors.light};
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 ${theme.record.gap}rem;
  transition: transform 0.3s ease;
  :hover {
    background: ${theme.colors.primary};
    transform: scale(1.1);
  }
`;

export const RecordImgStyle = css`
  border-radius: 50%;
  height: 50%;
  width: 50%;
  margin: 1rem;
  background: url(${props => props.img}) no-repeat center center/cover;
`;

export const RecordNameStyle = css`
  color: ${theme.colors.light};
  font-size: ${theme.record.size * 0.08}px;
  text-align: center;
  max-width: 90%;
`;