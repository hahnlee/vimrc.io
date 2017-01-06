import React from 'react';
require('./Header.scss');

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav">
                    vimrc.io
                </div>
            </nav>
        );
    }
}

export default Header;
