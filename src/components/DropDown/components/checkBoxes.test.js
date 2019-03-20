import React from 'react';
import CheckBoxes from './checkBoxes';
import renderer from 'react-test-renderer';

test('should be 2 checkbox rendered', () => {
    const component = renderer.create(<CheckBoxes options={['option1', 'option2']} searchTitle='Search Title' />);
    const checkBox = component.root.findAll(el => el.props.type === "checkbox");
    expect(checkBox).toHaveLength(2);
});

test('search the options', () => {
    const component = renderer.create(<CheckBoxes options={['option1', 'option2']} searchTitle='Search Title' />);
    const search = component.root.find(el => el.props.type === "text");
    search.props.onChange({ target: { value: '1' } });
    const checkBox = component.root.findAll(el => el.props.type === "checkbox");
    expect(checkBox).toHaveLength(1);
});