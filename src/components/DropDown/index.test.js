import React from 'react';
import DropDown from './index';
import renderer from 'react-test-renderer';

test('should match snapshot with hidden options', () => {
    const component = renderer.create(<DropDown
        options={["CandyEat", "OnionsPick", "FannyDuck", "Click-o-Wisp"]}
        selectTitle="Games"
        searchTitle="Search for games."
    />);

    expect(component.toJSON()).toMatchSnapshot();
});

test('should match snapshot with visible options', () => {
    const component = renderer.create(<DropDown
        options={["CandyEat", "OnionsPick", "FannyDuck", "Click-o-Wisp"]}
        selectTitle="Games"
        searchTitle="Search for games."
    />);

    const selectBox = component.root.find(element => element.props.className === 'selectBox');
    selectBox.props.onClick();

    expect(component.toJSON()).toMatchSnapshot();
});
