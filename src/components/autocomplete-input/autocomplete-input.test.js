import AutocompleteInput from './index';
import { mount } from 'enzyme';
import React from 'react'

describe('TestCase Autocomplete', () => {
  let wrapper, ref;
  beforeEach(() => {
    ref = React.createRef();
  })
  test('Check Autocomplete with List', () => {
    const handleSubmitTitle = jest.fn();
    const setSearch = jest.fn()
    const event = {
      preventDefault() { },
      target: { value: 'Batman' }
    };
    const autoCompleteList = [{ "Title": "Batman Begins", "Year": "2005", "imdbID": "tt0372784", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
    { "Title": "Batman v Superman: Dawn of Justice", "Year": "2016", "imdbID": "tt2975590", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
    { "Title": "Batman: The Dark Knight Returns, Part 1", "Year": "2012", "imdbID": "tt2313197", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg" }]
    wrapper = mount(
      <AutocompleteInput
        search={'Batman'}
        setSearch={setSearch}
        setAutoCompleteToggle={() => { }}
        autoCompleteRef={ref}
        handleSubmitTitle={handleSubmitTitle}
        autoCompleteList={autoCompleteList}
        toggleAutoComplete={() => { }}
      />
    );

    const checkValue = wrapper.find('.input_container').props().value;
    expect(checkValue).toEqual('Batman')
    wrapper.find('.button_container').simulate('click');
    expect(handleSubmitTitle).toHaveBeenCalledTimes(1)
    wrapper.find('input').simulate('change', event);
    expect(setSearch).toBeCalledWith('Batman');
    const checkAutoCompleteList =  wrapper.find('.autocomplete_items').map((node) => node.text());
    expect(checkAutoCompleteList)
    .toEqual([
      "Batman Begins",
      "Batman v Superman: Dawn of Justice",
      "Batman: The Dark Knight Returns, Part 1"]);
  });

  test('Check Autocomplete without List', () => {
    const handleSubmitTitle = jest.fn();
    const setSearch = jest.fn()
    const event = {
      preventDefault() { },
      target: { value: 'Batman' }
    };
    const autoCompleteList = []
    wrapper = mount(
      <AutocompleteInput
        search={'Batman'}
        setSearch={setSearch}
        setAutoCompleteToggle={() => { }}
        autoCompleteRef={ref}
        handleSubmitTitle={handleSubmitTitle}
        autoCompleteList={autoCompleteList}
        toggleAutoComplete={() => { }}
      />
    );

    const checkValue = wrapper.find('.input_container').props().value;
    expect(checkValue).toEqual('Batman')
    wrapper.find('.button_container').simulate('click');
    expect(handleSubmitTitle).toHaveBeenCalledTimes(1)
    wrapper.find('input').simulate('change', event);
    expect(setSearch).toBeCalledWith('Batman');
    const checkAutoCompleteList =  wrapper.find('.autocomplete_items').map((node) => node.text());
    expect(checkAutoCompleteList)
    .toEqual([]);
  });
})
