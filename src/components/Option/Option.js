import React from 'react';

class Option extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.data.default
        };
    }

    render(){
        const selectView = (
            <select value={this.state.value}>
                { this.props.data.select.map((option) => {
                    return(
                        <option>
                            {option}
                        </option>
                    );
                })}
            </select>
        );

        const inputView = (
            <input 
                type={this.props.data.type}
            />
        );

        return(
            <div>
                <span>{this.props.data.name}</span>
                { this.props.data.type == "select" ? selectView : inputView }
            </div>
        );
    }
}

Option.propTypes = {
    data: React.PropTypes.object
};

Option.defaultProps = {
    data: {
        "name": "vim option name",
        "type": "checkbox",
        "select": [],
        "isVimOnly": false,
        "isGuiOnly": false,
        "os": "global",
        "category": "",
        "default": false
    }
};
export default Option;
