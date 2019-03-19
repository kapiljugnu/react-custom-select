import React from 'react';
import DropDown from './index';
import renderer from 'react-test-renderer';

test('Dropdown show option when click', () => {
    const component = renderer.create(<DropDown
        options={["CandyEat", "OnionsPick", "FannyDuck", "Click-o-Wisp"]}
        selectTitle="Games"
        searchTitle="Search for games."
    />);

    expect(component.toJSON()).toMatchSnapshot();

    const root = component.root;

    const selectBox = root.find(element => element.props.className === 'selectBox');
    selectBox.props.onClick();

    expect(component.toJSON()).toMatchSnapshot();
})