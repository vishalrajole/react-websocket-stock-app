import styled from 'styled-components';
import { POSITIVE_COLOR, NEGATIVE_COLOR, DEFAULT_COLOR } from '../../styles/variables';

export const PriceCell = styled.td`
  background: ${props => {
        switch (props.flag) {
            case 'positive':
                return POSITIVE_COLOR;
            case 'negative':
                return NEGATIVE_COLOR;
            default:
                return DEFAULT_COLOR;
        }
    }};
`;