import React from 'react';
import { connect } from 'react-redux';
import { optionChange } from 'actions/option';
import './Option.scss';

class Option extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.props.optionChange(this.props.data.name, value);
  }
  
  render() { 
    const inputView = () => {
      switch (this.props.data.type) {
        case "select":
          return (
            <select value={this.props.value} onChange={this.handleChange}>
              { this.props.data.select.map((option, i) => {
                return(
                  <option key={`${option}-${i}`}>
                    {option}
                  </option>
                );
              })}
            </select>
          );
        case "checkbox":
          return (
            <label className="switch-original">
              <input type={this.props.data.type}
                checked={this.props.value}
                onChange={this.handleChange}
              />
              <span className="check"></span>
            </label>
          );
        default:
          return (
            <input type={this.props.data.type}
              value={this.props.value}
              onChange={this.handleChange}
              />
          );
        }
      }
    
    return(
      <li className="option-item" key={this.props.data.name}>
        <label className="option-name">
          {this.props.data.name} / {this.props.data.shortname}
        </label>
        {inputView()}
        <p className="option-info">
          {this.props.info} 
          <span className="option-default">
            default: {this.props.defaultValue.toString()}
          </span>
        </p>
      </li>
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
  index: -1,
  defaultValue: ""
};

const mapDispatchToProps = (dispatch) => {
  return {
    optionChange: (key, value) => dispatch(optionChange(key, value))
  };
}

export default connect(null, mapDispatchToProps)(Option);
