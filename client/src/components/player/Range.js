import styled, { css } from 'styled-components';
import theme from '../../styled/theme';

const trackStyle = css`
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: ${theme.range.height}px;
    background: ${theme.colors.light};
    margin: 8px 0;
  }

  ::-moz-range-track {
    width: 100%;
    height: ${theme.range.height}px;
    background: ${theme.colors.light};
  }

  ::-ms-track {
    width: 100%;
    height: ${theme.range.height}px;
    margin: 6px 0;
  }

  ::-ms-fill-lower {
    background: ${theme.colors.light};
  }

  ::-ms-fill-upper {
    background: ${theme.colors.light};
  }
`;

const thumbStyle = css`
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: ${theme.range.height}px solid ${theme.colors.light};
    border-radius: 50%;
    background: ${theme.colors.primarySolid};
    margin-top: -9px;
    transition: transform 0.15s ease;
  }

  ::-webkit-slider-thumb:hover {
    transform: scale(${theme.range.scaleFactor});
  }

  ::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border: ${theme.range.height}px solid ${theme.colors.light};
    border-radius: 50%;
    background: ${theme.colors.primarySolid};
    transition: transform 0.15s ease;
  }

  ::-moz-range-thumb:hover {
    transform: scale(${theme.range.scaleFactor});
  }

  ::-ms-thumb {
    border: ${theme.range.height}px solid ${theme.colors.light};
    border-radius: 50%;
    background: ${theme.colors.primarySolid};
    width: 16px;
    height: 16px;
    margin: 0;
  }

  ::-ms-thumb:hover {
    transform: scale(${theme.range.scaleFactor});
  }
`;

const StyledRange = styled.input`
  /* general */
  -webkit-appearance: none;
  outline: none;
  background: transparent;
  width: ${theme.range.width}px;
  cursor: pointer;
  
  ${trackStyle};

  ${thumbStyle};
`;

function Range() {
  return (
    <StyledRange type="range" min="0" max="1" step="0.001" />
  );
}

export default Range;