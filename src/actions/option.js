import {
    OPTION_CHANGE,
    OPTION_LIST_SUCCESS,
    OPTION_LIST_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function optionListRequest(){
    return (dispatch) => {
        let mockData = [
            {
                "_id": "578b958ec1da760909c263f4",
                "name": "number",
                "type": "checkbox",
                "select": [],
                "isVimOnly": false,
                "isGuiOnly": false,
                "os": "global",
                "category": "editor",
                "default": false,
                "value": ""
            },
            {
                "_id": "578b957ec1da760909c263f3",
                "name": "mouse",
                "type": "select",
                "select": ["", "n", "v", "i", "c", "h", "a", "r"],
                "isVimOnly": true,
                "isGuiOnly": true,
                "os": "global",
                "category": "editor",
                "default": "",
                "value": ""
            }
        ]
        return dispatch(optionListSuccess(mockData));
    };
}

export function optionListSuccess(data){
    return {
        type: OPTION_LIST_SUCCESS,
        data
    };
}

export function optionChange(index, content) {
    return {
        type: OPTION_CHANGE,
        index,
        content
    }
}


