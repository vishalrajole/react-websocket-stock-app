import React, { Component } from 'react';
import StockItem from '../stock-item/StockItem';
import { connect } from "react-redux";

class StockList extends Component {
    render() {
        return (
            <React.Fragment>
                <h3 className="heading">Stock List</h3>
                {this.props.stocks.length > 0 && <table className="table">
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
                </table>}
                {!this.props.stocks.length && <p className="loader"> Loading ... </p>}
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
