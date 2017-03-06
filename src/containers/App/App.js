import React from 'react';
import { connect } from 'react-redux';
import { Header, Menu, Preview } from 'components';
require('./App.scss');

class App extends React.Component {
  
  render() {
    return (
      <div className="main">
        <Header/>
        <div className="container">
          <Menu/>
          <div className="option">
            {this.props.children}
          </div>
          <Preview data={this.props.optionData}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    optionData: state.option.data
  };
}

export default connect(mapStateToProps)(App);
