import React from 'react';
import { Option } from 'components';

class OptionList extends React.Component {

    render() {
        const mapToComponents = data => {
            return data.map((option, i) => {
                return (
                    <Option
                        data={option}
                        index={i}
                    />
                );
            });
        };
        return (
            <div>
                { mapToComponents(this.props.data) }
            </div>
        );
    }
}

OptionList.propTypes = {
    data: React.PropTypes.array
}

OptionList.defaultProps = {
    data: []
}

export default OptionList;
