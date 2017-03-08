import React from 'react';
import { connect } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/styles';
require('./Preview.scss');

class Preview extends React.Component {
  
  render(){
    
    const createCode = data => {
      let hlcode = '';
      for(let category in data) {
        for(let subcategory in data[category]["data"]) {
          data[category]["data"][subcategory].map((option, i) => {
            let value = this.props.value[option.name];
            let code;
            if (!value || value === option.default || value === ""){
              code = '';
            } else {
              switch(option.type){
                case 'number':
                case 'select':
                  code = `set ${option.name}=${value}\n`;
                  break;
                case 'checkbox':
                  if (value) {
                    code = `set ${option.name}\n`;
                    break;
                  }
                  code = `set no${option.name}\n`;
                  break;
                default:
                  code = '';
                  break;
              }
            }
            hlcode += code;
          });
        }
      }
      return hlcode;
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
    data: state.option.list,
    value: state.option.value
  };
};

export default connect(mapStateToProps)(Preview);
