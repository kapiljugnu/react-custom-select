import React from 'react';
import Options from './options';
import renderer from 'react-test-renderer';

const onClick = jest.fn();

test('when option is selected', () => {
    const component = renderer.create(<Options value="testvalue" selected={true} onClick={onClick} />);
    const Checkbox = component.root.find(element => element.props.type === "checkbox");
    expect(Checkbox.props.checked).toBeTruthy();
});

test('when option is not selected', () => {
    const component = renderer.create(<Options value="testvalue" selected={false} onClick={onClick} />);
    const Checkbox = component.root.find(element => element.props.type === "checkbox");
    expect(Checkbox.props.checked).toBeFalsy()
});

test('when option is clicked', () => {
    const component = renderer.create(<Options value="testvalue" selected={false} onClick={onClick} />);
    const Checkbox = component.root.find(element => element.props.type === "checkbox");
    Checkbox.props.onClick();
    expect(onClick).toBeCalled();
});