import {
  OPTION_CHANGE,
  OPTION_LOAD,
  OPTION_LOAD_SUCCESS,
  OPTION_LOAD_FAILURE,
  OPTION_INFO_LOAD,
  OPTION_INFO_LOAD_SUCCESS,
  OPTION_INFO_LOAD_FAILURE,
  SET_LANG
} from './ActionTypes';
import axios from 'axios';
import _ from 'underscore';

/* option */
export function optionLoadRequest() {
  return (dispatch) => {
    dispatch(optionLoad());
    return axios.get('/api/option')
    .then((res) => {
      dispatch(optionLoadSuccess(res.data));
    }).catch((err) => {
      console.log(err);
      dispatch(optionLoadFailure());
    });
  };
}

export function optionLoad() {
  return {
    type: OPTION_LOAD
  };
}

export function optionLoadSuccess(rawData) {
  let data = _.groupBy(rawData, 'category');
  for(let category in data) {
    data[category] = _.groupBy(data[category], 'subcategory');
  }
  console.log(data);
  return {
    type: OPTION_LOAD_SUCCESS,
    data
  };
}

export function optionLoadFailure() {
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

/* OptionInfo */
export function optionInfoLoadRequest(lang) {
  return (dispatch) => {
    dispatch(optionInfoLoad(lang));
    let url = `/api/option/info/${lang}`;
    return axios.get(url)
    .then((res) => {
      console.log(res.data);
      dispatch(optionInfoLoadSuccess(res.data.info));
    }).catch((err) => {
      console.log(err);
      dispatch(optionInfoLoadFailure());
    });
  }; 
}

export function optionInfoLoad() {
  return {
    type: OPTION_INFO_LOAD
  };
}

export function optionInfoLoadSuccess(data) {
  return {
    type: OPTION_INFO_LOAD_SUCCESS,
    data
  };
}

export function optionInfoLoadFailure() {
  return {
    type: OPTION_INFO_LOAD_FAILURE
  };
}

export function setLang(lang) {
  return {
    type: SET_LANG,
    lang
  };
}
