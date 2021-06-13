import Modal from './index';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import React from 'react'

describe('TestCase Modal', () => {
  let wrapper;

  test('Check Modal isOpen:true', () => {
    const onRequestClose = jest.fn()
    wrapper = mount(
      <Modal
        isOpen={true}
        onRequestClose={onRequestClose}
      />);

    const checkModalPopUp = wrapper.find('.active').exists()
    expect(checkModalPopUp).toEqual(true);
  });

  test('Check Modal isOpen:false', () => {
    const onRequestClose = jest.fn()
    wrapper = mount(
      <Modal
        isOpen={false}
        onRequestClose={onRequestClose}
      />);

    const checkModalPopUp = wrapper.find('.active').exists()
    expect(checkModalPopUp).toEqual(false);
  });

})
