import React from 'react';
import { Header, Menu, OptionList, Preview } from 'components';
import { connect } from 'react-redux';
import { optionChange, optionListRequest } from 'actions/option';
require('./App.scss');

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.dispatch(optionListRequest());
  }
  
  render() {
    return (
      <div className="main">
        <Header/>
        <div className="container">
          <Menu/>
          <div className="option">
            <OptionList data={this.props.optionData}/>
          </div>
          <Preview data={this.props.optionData}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    optionData: state.option.data
  };
}

export default connect(mapStateToProps)(App);
