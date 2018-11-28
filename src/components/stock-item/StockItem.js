import React from 'react';
import { PriceCell } from './StockItem.style';

const StockItem = (props) => {
    return (
        <tr>
            <td>{props.name.toUpperCase()}</td>
            <PriceCell flag={props.flag}>{props.price.toFixed(2)}</PriceCell>
            <td>{props.timeString}</td>
        </tr>
    )
}

export default StockItem;