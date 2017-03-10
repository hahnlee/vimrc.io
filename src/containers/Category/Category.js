import React from 'react';
import { connect } from 'react-redux';
import { OptionList } from 'components';

class Category extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <OptionList
        data={this.props.options[this.props.params.categoryName]}
        value={this.props.value}
        info={this.props.info}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.option.list.data,
    value: state.option.value,
    info: state.option.info.data
  }
};

export default connect(mapStateToProps)(Category);
