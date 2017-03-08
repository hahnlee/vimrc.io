import Prism from 'prismjs';
import React from 'react';
import { connect } from 'react-redux';
require('./prism.css');
require('./Preview.scss');

class Preview extends React.Component {
  
  render(){
    
    const createCode = data => {
      for(let category in data){
        return data[category].data.map((option, i) => {
          let value = this.props.value[option.name];
          if (!value || value === option.default || value === "")
            return '';
        
          switch(option.type){
            case 'select':
            return `set ${option.name}=${value}\n`;
            case 'checkbox':
              if (value)
                return `set ${option.name}\n`;
              return `set no${option.name}\n`;
            default:
              return '';
          }
        });
      }
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


const mapStateToProps = (state) => {
  return {
    data: state.option.list,
    value: state.option.value
  };
};

export default connect(mapStateToProps)(Preview);
