import styled from 'styled-components';
import theme from '../styled/theme';
import Record from './Record';

const StyledRecords = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.record.gap * 2}rem ${theme.record.gap}rem;

  background: ${theme.colors.primary};
  border-radius: ${theme.radius};
`;

function Records({ records, defaultImg }) {
  return (
    <StyledRecords>
      {records.map(record => <Record key={record.id} img={record.images[1].url} name={record.name} />)}
    </StyledRecords>
  );
}

export default Records;