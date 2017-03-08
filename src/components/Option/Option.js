import React from 'react';
import { connect } from 'react-redux';
import { optionChange } from 'actions/option';

class Option extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      value: value
    });      
    this.props.optionChange(this.props.data.name, value);
  }
  
  render() {
    
    let inputView = null;
    switch (this.props.data.type) {
      case "select":
        inputView = (
          <select value={this.state.value} onChange={this.handleChange}>
            { this.props.data.select.map((option) => {
              return(
                <option>
                  {option}
                </option>
              );
            })}
          </select>
        );
        break;
      case "checkbox":
        inputView = (
          <input type={this.props.data.type}
            checked={this.state.value}
            onChange={this.handleChange}
            />
        );
        break;
      default:
        inputView = (
          <input type={this.props.data.type}
            value={this.state.value}
            onChange={this.handleChange}
            />
        );
    }
    
    return(
      <div>
        <span>{this.props.data.name}</span>
          { inputView }
      </div>
    );
  }
}

Option.propTypes = {
  data: React.PropTypes.object,
  index: React.PropTypes.number
};

Option.defaultProps = {
  data: {
    "_id": "12345678",
    "name": "vim option name",
    "type": "checkbox",
    "select": [],
    "isVimOnly": false,
    "isGuiOnly": false,
    "os": "global",
    "category": "",
    "default": false
  },
  value: "",
  index: -1
};

const mapDispatchToProps = (dispatch) => {
  return {
    optionChange: (index, content) => dispatch(optionChange(index, content))
  };
}

export default connect(null, mapDispatchToProps)(Option);
