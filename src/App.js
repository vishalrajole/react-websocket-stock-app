import React, { Component } from 'react';
import { connect } from "react-redux"
import io from 'socket.io-client';
import StockList from './components/stock-list/StockList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isWebsocketError: '' };
  }

  componentDidMount() {
    const SERVER_URL = 'ws://stocks.mnet.website';
    const socket = new window.WebSocket(SERVER_URL);

    socket.onopen = (event) => {
      socket.send('Ping!');
    };

    socket.onmessage = (event) => {
      this.props.receivedata(event.data);
    };

    socket.onerror = (event) => {
      this.setState({ isWebsocketError: "Something went wrong. Please refresh..." });
    };

    socket.onclose = (event) => {
      this.setState({ isWebsocketError: "Websockets are closed. Please check after some time" })
    };

    /* 
    var socketOptions = {
      "force new connection": true,
      "reconnectionAttempts": "Infinity", 
      "timeout": 100,                  
      "transports": ["websocket"]
    };
    const socket = io.connect('ws://stocks.mnet.website', socketOptions);
    socket.on('connect', function () {
      console.log('inside connect')
    });
    socket.on('event', function (data) {
      console.log('inside event', data)
    });
    socket.on('disconnect', function () {
      console.log('inside disconnect')
    }); 
    */
  }
  render() {
    return (
      <React.Fragment>
        {!this.state.isWebsocketError &&
          <StockList></StockList>
        }
        {this.state.isWebsocketError &&
          <div>{this.state.isWebsocketError}</div>}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispach) => {
  return ({
    receivedata: (data) => {
      return dispach({
        type: 'UPDATE',
        payload: data
      });
    }
  });
}
export default connect(null, mapDispatchToProps)(App);