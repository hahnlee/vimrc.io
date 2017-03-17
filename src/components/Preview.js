import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/styles';
import './Preview.scss';

class Preview extends React.Component {
  
  render(){
    const optionToCode = option => {
      let value = this.props.value[option.name];
      let code = '';

      // define defalut value by os
      let defaultValue = (typeof option.default[this.props.os] === "undefined") ?
        option.default.global : option.default[this.props.os];
      
      // defalut value
      if (!value || value === defaultValue || value === "") {
        return code;
      }
      
      // none defalut value
      switch (option.type) {
        case 'checkbox':
          code = value ? `set ${option.name}\n` : code = `set no${option.name}\n`;
          return code;
        default:
          code = `set ${option.name}=${value}\n`;
          return code;
      }
    }
    
    const createCode = data => {
      let code = '';
      for (let category in data) {
        for (let subcategory in data[category]) {
          for (let i in data[category][subcategory]) {
            code += optionToCode(data[category][subcategory][i]);
          }
        }
      }
      return code;
    };

    return(
      <SyntaxHighlighter language='vim' style={gruvboxDark} showLineNumbers={true}>
        {createCode(this.props.data)}
      </SyntaxHighlighter>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    data: state.option.list.data,
    value: state.option.value,
    os: state.option.os
  };
};

export default connect(mapStateToProps)(Preview);
