import React from 'react';
import { mount } from 'enzyme';
import Slider from './Slider';

const slides = [{ text: 'test' }];

it('renders slides', () => {
  const component = mount(
    <Slider
      data={slides}
      index={0}
      renderSlide={({ item }) => (
        <div id={item.text}>{item.text}</div>
      )}
    />,
  );
  expect(component.find('#test').length).toEqual(1);
});

it('renders nothing if data is empty', () => {
  const component = mount(<Slider data={[]} />);
  expect(component.html()).toBeNull();
});

it('animates transitions between received props', () => {
  // body...
});
