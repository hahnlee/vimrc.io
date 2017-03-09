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
  value: {},
  lang: 'en',
  info: {
    status: 'INIT',
    data: {}
  }
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
        list: {
          [action.category]: {status: {$set: 'WAITING'}}
        }
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
        list: {
          [action.category]: {status: {$set: 'FAILURE'}}
        }
      });
    case types.OPTION_INFO_LOAD:
      return update(state, {
        info: {status: {$set: 'WAITING'}}
      });
    case types.OPTION_INFO_LOAD_SUCCESS:
      return update(state, {
        info: {
          status: {$set: 'SUCCESS'},
          data: {$set: action.data}
        }
      });
    case types.OPTION_INFO_LOAD_FAILURE:
      return update(state, {
        info: {status: {$set: 'FAILURE'}}
      });
    case types.SET_LANG:
      return update(state, {
        lang: {$set: action.lang}
      });
    default:
      return state;
  }
}
