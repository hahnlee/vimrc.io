'use strict';

import Prism from 'prismjs';
import React from 'react';
require('./prism.css');
require('./Preview.scss');

class Preview extends React.Component {
  
  render(){
    
    const createCode = data => {
      return data.map((option, i) => {
        
        if (option.value === option.default || option.value === "")
          return '';
        
        switch(option.type){
          case 'select':
            return `set ${option.name}=${option.value}\n`;
          case 'checkbox':
            if (option.value)
              return `set ${option.name}\n`;
            return `set no${option.name}\n`;
          default:
            return '';
        }
      });
    };

    return(
      <pre className="preview language-vim">
        <code className="language-vim">
          {createCode(this.props.data)}
        </code>
      </pre>
    );
  }
}

Preview.propTypes = {
  data: React.PropTypes.array
}

Preview.defaultProps = {
  data: []
}

export default Preview;
