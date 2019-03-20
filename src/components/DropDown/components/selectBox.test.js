import React from 'react';
import SelectBox from './selectBox';
import renderer from 'react-test-renderer';

test('when selectbox is clicked', () => {
    const onClick = jest.fn();
    const component = renderer.create(<SelectBox selectTitle='test title' onClick={onClick} />);
    const div = component.root.find(element => element.props.className === "selectBox");
    div.props.onClick();
    expect(onClick).toBeCalled();
});