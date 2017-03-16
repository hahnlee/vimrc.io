import React from 'react';
import { Option } from 'components';
import './OptionList.scss';

class OptionList extends React.Component {
  render() {
    const mapToOption = data => {
      return data.map((option, i) => {
        let value = "";
        let info = this.props.info[option.name];
        let defaultValue = (typeof option.default.global !== "undefined") ?
          option.default.global : option.default[this.props.os];
        if (typeof this.props.value[option.name] === "undefined") {
          value = defaultValue;
        } else {
          value = this.props.value[option.name];
        }
        return (
          <Option
            data={option}
            key={option.name}
            value={value}
            info={info}
            defaultValue={defaultValue}
          />
        );
      });
    };

    const mapToComponents = data => {
      let optionList = [];
      for(let subcategory in data) {
        optionList.push((
          <li key={subcategory}>
            <h2>{subcategory}</h2>
            <ul className="option-list">
              {mapToOption(data[subcategory])}
            </ul>
          </li>
        ));
      }
      return optionList;
    };
    
    return (
      <ul className="option-group">
        {mapToComponents(this.props.data)}
      </ul>
    );
  }
}

OptionList.propTypes = {
  data: React.PropTypes.object,
  value: React.PropTypes.object,
  info: React.PropTypes.object,
  os: React.PropTypes.string
}

OptionList.defaultProps = {
  data: {},
  value: {},
  info: {},
  os: 'global'
}

export default OptionList;
