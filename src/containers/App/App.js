import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import { Header, Menu, Preview } from 'components';
import { optionLoadRequest, optionInfoLoadRequest, setLang } from 'actions/option';
import getLang from 'helpers/getLang';
require('./App.scss');

class App extends React.Component {

  componentDidMount() {
    let lang = getLang();
    this.props.setLang(lang);
    this.props.optionInfoLoadRequest(lang);
    this.props.optionLoadRequest();
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

const mapStateToProps = (state) => {
  return {
    optionStatus: state.option.list.status
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    optionLoadRequest: () => {
      return dispatch(optionLoadRequest());
    },
    optionInfoLoadRequest: (lang) => {
      return dispatch(optionInfoLoadRequest(lang));
    },
    setLang: (lang) => {
      return dispatch(setLang(lang));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
