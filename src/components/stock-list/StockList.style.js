import styled from 'styled-components';
import { TABLE_BORDER, TABLE_BACKRGOUND, TABLE_COLOR } from '../../styles/variables';


export const Heading = styled.h3`
    text-align: center; 
`;

export const Loader = styled.p`
    text-align: center;
`;

export const Table = styled.table`
    width: 60%;
    margin: 0 auto;
    border-collapse: collapse;
    color:#333;

     > tbody >tr >td {
        border: 1px solid ${TABLE_BORDER};
        padding: 5px 10px;
        width: 30%;
      }

       > thead >tr >th {
        border: 1px solid ${TABLE_BORDER};
        background: ${TABLE_BACKRGOUND};
        color: ${TABLE_COLOR}; 
        padding: 10px 15px;
      }
`;