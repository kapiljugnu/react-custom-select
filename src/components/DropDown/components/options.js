import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ value, onClick, selected }) => {
    const props = {
        type: "checkbox",
        value,
        onClick
    };
    if (selected) {
        props.checked = true;
    }
    return (<label>
        <input {...props} />
        {value}
    </label>)
};

Options.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
}

export default Options;