import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initalState = {
    data: []
}

export default function option (state, action) {
    switch(action.type) {
        case types.OPTION_CHANGE:
            return update(state, {
                data: {
                    [action.index]: { $set: action.value }
                }
            });
        default:
            return state;
    }
}
