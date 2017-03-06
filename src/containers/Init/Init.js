import React from 'react';
import { connect } from 'react-redux';
import { OptionList } from 'components';
import { optionChange, optionListRequest } from 'actions/option';

class Init extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(optionListRequest());
  }

  render() {
    return(
      <OptionList data={this.props.optionData}/>
    );
  }
}

function mapStateToProps(state){
  return {
    optionData: state.option.data
  };
}

export default connect(mapStateToProps)(Init);
