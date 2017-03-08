import {
  OPTION_CHANGE,
  OPTION_LOAD,
  OPTION_LOAD_SUCCESS,
  OPTION_LOAD_FAILURE
} from './ActionTypes';
import axios from 'axios';
import _ from 'underscore';

export function optionLoadRequest(category) {
  return (dispatch) => {
    dispatch(optionLoad(category));
    let url = `/api/option/${category}`;
    return axios.get(url)
    .then((res) => {
      dispatch(optionLoadSuccess(category, res.data));
    }).catch((err) => {
      console.log(err);
      dispatch(optionLoadFailure(category));
    });
  };
}

export function optionLoad(category) {
  return {
    type: OPTION_LOAD,
    category
  };
}

export function optionLoadSuccess(category, rawData) {
  let data = _.groupBy(rawData, 'subcategory');
  return {
    type: OPTION_LOAD_SUCCESS,
    category,
    data
  };
}

export function optionLoadFailure(category) {
  return {
    type: OPTION_LOAD_FAILURE
  };
}

export function optionChange(key, value) {
  return {
    type: OPTION_CHANGE,
    key,
    value
  }
}
