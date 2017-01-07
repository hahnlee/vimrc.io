import React from 'react';
require('./Preview.scss');

class Preview extends React.Component {
    render() {
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
