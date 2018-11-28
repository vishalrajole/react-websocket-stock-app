import moment from 'moment';

const TIME_DIFFERENCE = 3;
const StockListReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE':
            const newList = JSON.parse(action.payload).reduce((stocks, stock) => {
                let flag = 'neutral';
                let timestamp = moment();
                let timeString = timestamp.format('YYYY-MM-DD HH:mm:ss');
                let duration;
                let objInState = state[stock[0]];
                if (objInState && objInState.price > stock[1]) {
                    flag = "negative";
                    // Ideally, moment fromNow() should be used to get real time time difference between updates, and can be optimized with reusable function
                    duration = moment.duration(moment(new Date()).diff(objInState.timestamp))
                    if (duration.asSeconds() < TIME_DIFFERENCE) {
                        timeString = 'a seconds ago'
                    } else {
                        timeString = objInState.timestamp.format('YYYY-MM-DD HH:mm:ss')
                    }
                    timestamp = moment();
                } else if (objInState && objInState.price < stock[1]) {
                    flag = "positive";
                    duration = moment.duration(moment(new Date()).diff(objInState.timestamp))
                    if (duration.asSeconds() < TIME_DIFFERENCE) {
                        timeString = 'a seconds ago'
                    } else {
                        timeString = objInState.timestamp.format('YYYY-MM-DD HH:mm:ss')
                    }
                    timestamp = moment();
                }

                stocks[stock[0]] = { name: stock[0], price: stock[1], flag, timestamp, timeString };
                return stocks
            }, {});
            const updatedList = { ...state, ...newList };
            return updatedList;

        default:
            return state;

    }
}

export default StockListReducer;