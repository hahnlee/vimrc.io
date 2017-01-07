import React from 'react';
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
                    <Preview/>
                </div>
            </div>
        );
    }
}

export default App;
