import React from 'react';
import { Option } from 'components';
require('./OptionList.scss');

class OptionList extends React.Component {
  
  render() {
    const mapToOption = data => {
      return data.map((option, i) => {
        let value = "";
        let info = this.props.info[option.name];
        if(typeof this.props.value[option.name] === "undefined") {
          value = option.default;
        } else {
          value = this.props.value[option.name];
        }
        return (
          <Option
            data={option}
            value={value}
            info={info}
          />
        );
      });
    };

    const mapToComponents = data => {
      let optionList = [];
      for(let subcategory in data) {
        optionList.push((
          <li>
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
        { console.log(this.props.data) }
        { mapToComponents(this.props.data) }
      </ul>
    );
  }
}

OptionList.propTypes = {
  data: React.PropTypes.array
}

OptionList.defaultProps = {
  data: [],
  value: {},
  info: {}
}

export default OptionList;
