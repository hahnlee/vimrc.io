import {
    OPTION_CHANGE
} from './ActionTypes';
import axios from 'axios';

export function optionChange(data) {
    return {
        type: OPTION_CHANGE,
        index,
        value
    }
}


