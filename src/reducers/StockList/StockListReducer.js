import moment from 'moment';

const StockListReducer = (state = {}, action) => {
    if (action.type === 'RECEIVED') {
        const newList = JSON.parse(action.payload).reduce((stocks, stock) => {
            let flag = 'neutral';
            let timestamp = moment();
            let timeString = timestamp.format('YYYY-MM-DD HH:mm:ss');
            let duration;
            let objInState = state[stock[0]];
            if (objInState && objInState.price > stock[1]) {
                flag = "negative";
                duration = moment.duration(moment(new Date()).diff(objInState.timestamp))
                if (duration.asSeconds() < 3) {
                    timeString = 'a seconds ago'
                } else {
                    timeString = objInState.timestamp.format('YYYY-MM-DD HH:mm:ss')
                }
                timestamp = moment();
            } else if (objInState && objInState.price < stock[1]) {
                flag = "positive";
                duration = moment.duration(moment(new Date()).diff(objInState.timestamp))
                if (duration.asSeconds() < 3) {
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
    }
    return state;
}

export default StockListReducer;