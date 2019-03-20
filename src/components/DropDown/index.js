import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import SelectBox from './components/selectBox';
import CheckBoxes from './components/checkBoxes';

class DropDown extends React.Component {
    state = {
        showOption: false,
    }

    static propTypes = {
        options: PropTypes.array,
        selectTitle: PropTypes.string,
        searchTitle: PropTypes.string,
    }

    onDropDownClick = () => {
        this.setState(({ showOption }) => ({ showOption: !showOption }));
    }

    render() {
        const { options, selectTitle, searchTitle } = this.props;
        const { showOption } = this.state;
        const checkboxStyle = showOption ? { display: "block" } : { display: "none" };

        return (
            <div className="multiselect">
                <SelectBox selectTitle={selectTitle} onClick={this.onDropDownClick} />
                <CheckBoxes style={checkboxStyle} options={options} searchTitle={searchTitle} />
            </div>
        );
    }
}

export default DropDown;