import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    data: [
        {
            "_id": "1234567890",
            "name": "none",
            "type": "select",
            "select": [],
            "default": "",
            "value": ""
        }
    ]
}

export default function option (state, action) {
    if(typeof state === 'undefined') {
        state = initialState;
    }

    switch(action.type) {
        case types.OPTION_CHANGE:
            return update(state, {
                data: {[action.index]: {["value"]: { $set: action.content }}}
            });
        case types.OPTION_LIST_SUCCESS:
            console.log(action.data[0].index);
            return update(state, {
                data: {$set: action.data}
            });
        default:
            return state;
    }
}
