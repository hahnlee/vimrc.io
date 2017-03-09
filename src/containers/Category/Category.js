import React from 'react';
import { connect } from 'react-redux';
import { optionLoadRequest } from 'actions/option';
import { OptionList } from 'components';

class Category extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let category = this.props.params.categoryName;
    if(this.props.options[category].status === 'INIT') {
      this.props.optionLoadRequest(category).then(
        () => {
          console.log(this.props.options);
          console.log(this.props.info);
        }
      );
    }
  }

  render() {
    return (
      <OptionList
        data={this.props.options[this.props.params.categoryName].data}
        value={this.props.value}
        info={this.props.info}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.option.list,
    value: state.option.value,
    info: state.option.info.data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    optionLoadRequest: (category) => {
      return dispatch(optionLoadRequest(category));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
