import React from 'react';
import { connect } from 'react-redux';
import { Header, MenuList, Preview } from 'components';
import { optionLoadRequest, optionInfoLoadRequest, setLang } from 'actions/option';
import getLang from 'helpers/getLang';
import './App.scss';

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
        <main className="container">
          <MenuList/>
          <div className="option">
            {this.props.children}
          </div>
          <Preview/>
        </main>
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
