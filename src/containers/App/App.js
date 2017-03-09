import React from 'react';
import { connect } from 'react-redux';
import { Header, Menu, Preview } from 'components';
import { setLang, optionInfoLoadRequest } from 'actions/option';
import getLang from 'helpers/getLang';
require('./App.scss');

class App extends React.Component {

  componentWillMount() {
    let lang = getLang();
    this.props.setLang(lang);
    this.props.optionInfoLoadRequest(lang);
  }
  
  render() {
    return (
      <div className="main">
        <Header/>
        <div className="container">
          <Menu/>
          <div className="option">
            {this.props.children}
          </div>
          <Preview/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (lang) => {
      return dispatch(setLang(lang));
    },
    optionInfoLoadRequest: (lang) => {
      return dispatch(optionInfoLoadRequest(lang));
    }
  };
}

export default connect(null, mapDispatchToProps)(App);
