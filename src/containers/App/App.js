import React from 'react';
import { Header, Menu, OptionList, Preview } from 'components';
require('./App.scss');

class App extends React.Component {
    render() {
        var mockData = [
            {
                "name": "number",
                "type": "checkbox",
                "select": [],
                "isVimOnly": false,
                "isGuiOnly": false,
                "os": "global",
                "category": "editor",
                "default": true
            },
            {
                "name": "mouse",
                "type": "select",
                "select": ["", "n", "v", "i", "c", "h", "a", "r"],
                "isVimOnly": true,
                "isGuiOnly": true,
                "os": "global",
                "category": "editor",
                "default": ""
            }
        ];

        return (
            <div className="main">
                <Header/>
                <div className="container">
                    <Menu/>
                    <div className="option">
                        <OptionList data={mockData}/>
                    </div>
                    <Preview/>
                </div>
            </div>
        );
    }
}

export default App;
