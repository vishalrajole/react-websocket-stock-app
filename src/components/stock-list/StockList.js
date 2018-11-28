import React, { Component } from 'react';
import StockItem from '../stock-item/StockItem';
import { connect } from "react-redux";
import { Heading, Loader, Table } from './StockList.style';

class StockList extends Component {
    render() {
        return (
            <React.Fragment>
                <Heading>Stock List</Heading>
                {this.props.stocks.length > 0 && <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.stocks.map((stock, index) =>
                                <StockItem {...stock} key={index}></StockItem>)
                        }
                    </tbody>
                </Table>}
                {!this.props.stocks.length && <Loader> Loading ... </Loader>}
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        stocks: Object.values(state.StockListReducer)
    }
}
export default connect(mapStateToProps, {})(StockList);
