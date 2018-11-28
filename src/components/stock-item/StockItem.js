import React from 'react';

const StockItem = (props) => {
    return (
        <tr>
            <td>{props.name.toUpperCase()}</td>
            <td className={props.flag}>{props.price.toFixed(2)}</td>
            <td>{props.timeString}</td>
        </tr>
    )
}

export default StockItem;