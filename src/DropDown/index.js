import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class DropDown extends React.Component {
    state = {
        showOption: false,
        search: '',
        selectedOption: []
    }

    static propTypes = {
        options: PropTypes.array,
        selectTitle: PropTypes.string,
        searchTitle: PropTypes.string,
    }

    onDropDownClick = () => {
        this.setState(({ showOption }) => ({ showOption: !showOption }));
    }

    onOptionSelected = ({ target: { value, checked } }) => {
        const selected = this.state.selectedOption.filter(item => item !== value);
        if (checked) {
            selected.push(value);
        }
        this.setState({ selectedOption: selected })
    }

    onSearch = ({ target: { value } }) => {
        this.setState({ search: value });
    }

    render() {
        const { options, selectTitle, searchTitle } = this.props;
        const { search, showOption, selectedOption } = this.state;
        const checkboxStyle = { display: "none" };
        if (showOption) {
            checkboxStyle.display = "block";
        }
        return (
            <div className="multiselect">
                <div className="selectBox" onClick={this.onDropDownClick}>
                    <select>
                        <option>{selectTitle}</option>
                    </select>
                    <div className="overSelect" />
                </div>
                <div id="checkboxes" style={checkboxStyle}>
                    <input
                        type="text"
                        onChange={this.onSearch}
                        placeholder={searchTitle}
                    />
                    {options
                        .filter(item => item.toLowerCase().search(search.toLowerCase()) > -1)
                        .map(item => {
                            const props = {
                                type: "checkbox",
                                value: item,
                                onClick: this.onOptionSelected
                            };
                            if (selectedOption.includes(item)) {
                                props.checked = true;
                            }
                            return (
                                <label key={item}>
                                    <input {...props} />
                                    {item}
                                </label>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default DropDown;