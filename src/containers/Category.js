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
        os={this.props.os}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.option.list.data,
    value: state.option.value,
    info: state.option.info.data,
    os: state.option.os
  }
};

export default connect(mapStateToProps)(Category);
