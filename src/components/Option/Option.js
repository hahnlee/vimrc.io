import React from 'react';

class Option extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.data.default
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){
        const selectView = (
            <select value={this.state.value} onChange={this.handleChange}>
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
    data: React.PropTypes.object,
    index: React.PropTypes.number
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
        "default": false,
        "value": ""
    },
    index: -1
};
export default Option;
