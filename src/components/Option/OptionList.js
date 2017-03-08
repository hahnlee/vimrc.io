import React from 'react';
import { Option } from 'components';

class OptionList extends React.Component {
  
  render() {
    const mapToComponents = data => {
      return data.map((option, i) => {
        console.log(this.props.value);
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
    
    return (
      <div>
        { mapToComponents(this.props.data) }
      </div>
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
