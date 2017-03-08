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
        }
      );
    }
  }

  render() {
    return (
      <OptionList
        data={this.props.options[this.props.params.categoryName].data}
        value={this.props.value}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.option.list,
    value: state.option.value
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
