import React from 'react';
import { connect } from 'react-redux';
import { setOS } from 'actions/option';
import linux from 'assets/linux.svg';
import macOS from 'assets/macOS.svg';
import windows from 'assets/windows.svg';
import './Init.scss';

class Init extends React.Component {
  constructor(props) {
    super(props);
    this.handleOS = this.handleOS.bind(this);
  }

  handleOS(event) {
    this.props.setOS(event.target.value);
  }

  render() {
    return(
      <ul className="option-group">
        <li>
          <h2>OS</h2>
          <div className="select-item" onChange={this.handleOS}>
            <div className="select-os"> 
              <label className="select-os-label" htmlFor="linux">
                <img src={linux} alt="lunux"/>
                <h3>Linux</h3>
              </label>
              <input name="os" id="linux" type="radio"
                value="linux" checked={"linux" === this.props.os}
              />
            </div>
            <div className="select-os">
              <label className="select-os-label" htmlFor="macOS">
                <img src={macOS} alt="macOS"/>
                <h3>macOS</h3>
              </label>
              <input name="os" id="macOS" type="radio"
                value="macOS" checked={"macOS" === this.props.os}
              />
            </div>
            <div className="select-os">
              <label className="select-os-label" htmlFor="windows">
                <img src={windows} alt="windows"/>
                <h3>windows</h3>
              </label>
              <input name="os" id="windows" type="radio"
                value="windows" checked={"windows" === this.props.os}
              />
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    os: state.option.os
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    setOS: (OS) => dispatch(setOS(OS))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Init);
