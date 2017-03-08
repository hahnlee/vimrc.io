import React from 'react';
import { Option } from 'components';
require('./OptionList.scss');

class OptionList extends React.Component {
  
  render() {
    const mapToOption = data => {
      return data.map((option, i) => {
        let value = "";
        if(typeof this.props.value[option.name] === "undefined") {
          value = option.default;
          console.log("no value");
        } else {
          value = this.props.value[option.name];
          console.log('not');
        }
        return (
          <Option
            data={option}
            value={value}
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
  value: {}
}

export default OptionList;
