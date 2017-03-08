import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
  list: {
    display: {
      status: 'INIT',
      data: []
    },
    edit: {
      status: 'INIT',
      data: []
    },
    file: {
      status: 'INIT',
      data: []
    },
    gui: {
      status: 'INIT',
      data: []
    },
    language: {
      status: 'INIT',
      data: []
    }
  },
  value: {}
}

export default function option (state, action) {
  if(typeof state === 'undefined') {
    state = initialState;
  }
  
  switch(action.type) {
    case types.OPTION_CHANGE:
      return update(state, {
        value: {[action.key]: {$set: action.value}}
      });
    case types.OPTION_LOAD:
      return update(state, {
        list: {[action.category]: {status: {$set: 'WAITING'}}}
      });
    case types.OPTION_LOAD_SUCCESS:
      return update(state, {
        list: {[action.category]: {
          data: {$set: action.data},
          status: {$set: 'SUCCESS'}
        }}
      });
    case types.OPTION_LOAD_FAILURE:
      return update(state, {
        list: {[action.category]: {status: {$set: 'FAILURE'}}}
      });
    default:
      return state;
  }
}
