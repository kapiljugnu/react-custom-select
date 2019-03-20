import React from 'react';
import PropTypes from 'prop-types';

const SelectBox = ({ selectTitle, onClick }) => (<div className="selectBox" onClick={onClick}>
    <select>
        <option>{selectTitle}</option>
    </select>
    <div className="overSelect" >
        <div className="caret"></div>
    </div>
</div>);


SelectBox.propTypes = {
    selectTitle: PropTypes.string,
};

export default SelectBox;