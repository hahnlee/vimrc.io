'use strict';

import Prism from 'prismjs';
import React from 'react';
require('./Preview.scss');

class Preview extends React.Component {
    
    render() {
        const createCode = data => {
            if (data.value === '' || data.value === data.default) return '';
            switch(data.type){
                case 'select':
                    return `set {$data.name}={$data.value}\n`;
                case 'checkbox':
                    return `set {$data.name}\n`;
                default:
                    return '';
            }
        };
        return(
            <pre>
                <code className="vim">
                    " Created by https://vimrc.io
                </code> 
            </pre>
        );
    }
}

export default Preview;
