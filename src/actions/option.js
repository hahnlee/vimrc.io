import {
  OPTION_CHANGE,
  OPTION_LOAD,
  OPTION_LOAD_SUCCESS,
  OPTION_LOAD_FAILURE,
  OPTION_INFO_LOAD,
  OPTION_INFO_LOAD_SUCCESS,
  OPTION_INFO_LOAD_FAILURE,
  SET_LANG,
  SET_OS
} from './ActionTypes';
import { getOptionInfo } from 'data';
import _ from 'underscore';

/* option */
export function optionLoadRequest() {
  return (dispatch) => {
    dispatch(optionLoad());
    let options = require('data/options.json');
    try {
      return dispatch(optionLoadSuccess(options));
    } catch(e) {
      return(optionLoadFailure());
    }
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
    data[category] = _.groupBy(data[category], 'subCategory');
  }
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
    let optioninfo = getOptionInfo(lang);
    dispatch(optionInfoLoadSuccess(optioninfo));
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

export function setOS(OS) {
  return {
    type: SET_OS,
    OS
  };
}
