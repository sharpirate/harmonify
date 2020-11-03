import styled from 'styled-components';
import theme from '../../styled/theme';

const StyledResult = styled.li`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1.5rem;
  padding: 1rem;
  cursor: pointer;

  transition: transform 0.15s ease;
  :hover {
    background: ${theme.colors.primary};
    transform: scale(1.04);
  }
`;

const ResultImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const ResultName = styled.p`
  font-size: 1rem;
  color: ${theme.colors.light};
`;

function Result({ img, name }) {
  return (
    <StyledResult>
      <ResultImg src={img} draggable="false" />
      <ResultName>{name}</ResultName>
    </StyledResult>
  );
}

export default Result;