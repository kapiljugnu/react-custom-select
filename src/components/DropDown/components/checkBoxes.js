import React from 'react';
import PropTypes from 'prop-types';
import Options from './options';

class CheckBoxes extends React.Component {

    static propTypes = {
        searchTitle: PropTypes.string,
        options: PropTypes.array,
        style: PropTypes.object,
    }

    state = { search: '', selectedOption: [] };

    onSearch = ({ target: { value } }) => {
        this.setState({ search: value });
    }

    onOptionSelected = ({ target: { value, checked } }) => {
        const selected = this.state.selectedOption.filter(item => item !== value);
        if (checked) {
            selected.push(value);
        }
        this.setState({ selectedOption: selected })
    }

    render() {
        const { searchTitle, style, options } = this.props
        const { search, selectedOption } = this.state;
        const filteredOptions = options
            .filter(item => item.toLowerCase().search(search.toLowerCase()) > -1);

        return (<div className="checkboxes" style={style}>
            <input
                type="text"
                onChange={this.onSearch}
                placeholder={searchTitle}
            />
            {
                filteredOptions
                    .map(option => <Options
                        key={option}
                        value={option}
                        onClick={this.onOptionSelected}
                        selected={selectedOption.includes(option)} />)
            }
        </div>)
    }
}


export default CheckBoxes;