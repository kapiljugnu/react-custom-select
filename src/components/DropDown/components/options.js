import React from 'react';

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

export default Options;