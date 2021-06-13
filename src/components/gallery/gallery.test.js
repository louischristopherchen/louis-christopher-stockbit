import Gallery from './index';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import React from 'react'

describe('TestCase Gallery', () => {
  let wrapper, ref;
  beforeEach(() => {
    ref = React.createRef();
  })
  test('Check List isLoadingSubmit:false isLoadingMore:false', () => {
    const list = [
      { "Title": "Batman Begins", "Year": "2005", "imdbID": "tt0372784", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
      { "Title": "Batman v Superman: Dawn of Justice", "Year": "2016", "imdbID": "tt2975590", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
      { "Title": "Batman: The Dark Knight Returns, Part 1", "Year": "2012", "imdbID": "tt2313197", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg" }]
    wrapper = mount(
      <MemoryRouter>
        <Gallery
          list={list}
          isLoadingSubmitTitle={false}
          isLoadingMore={false}
          ref={ref}
        />
      </MemoryRouter>);
    const checkItemList = wrapper.find('Link').map((node) => node.text());
    const checkItemTitle = wrapper.find('.items_title').map((node) => node.text());
    const checkItemImage = wrapper.find('.items_image').map((node) => node.props().src);
    expect(checkItemList).toHaveLength(3);
    expect(checkItemTitle)
      .toEqual([
        "Batman Begins",
        "Batman v Superman: Dawn of Justice",
        "Batman: The Dark Knight Returns, Part 1"]);
    expect(checkItemImage)
      .toEqual([
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"]);
  });

  test('Check List isLoadingSubmit:true isLoadingMore:false', () => {
    const list = [
      { "Title": "Batman Begins", "Year": "2005", "imdbID": "tt0372784", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
      { "Title": "Batman v Superman: Dawn of Justice", "Year": "2016", "imdbID": "tt2975590", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
      { "Title": "Batman: The Dark Knight Returns, Part 1", "Year": "2012", "imdbID": "tt2313197", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg" }]
    wrapper = mount(
      <MemoryRouter>
        <Gallery
          list={list}
          isLoadingSubmitTitle={true}
          isLoadingMore={false}
          ref={ref}
        />
      </MemoryRouter>);
    const checkItemList = wrapper.find('Link').map((node) => node.text());
    const checkItemTitle = wrapper.find('.items_title').map((node) => node.text());
    const checkItemImage = wrapper.find('.items_image').map((node) => node.props().src);
    expect(checkItemList).toHaveLength(0);
    expect(checkItemTitle)
      .toEqual([]);
    expect(checkItemImage)
      .toEqual([]);
  });

  test('Check List isLoadingSubmit:false isLoadingMore:true', () => {
    const list = [
      { "Title": "Batman Begins", "Year": "2005", "imdbID": "tt0372784", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
      { "Title": "Batman v Superman: Dawn of Justice", "Year": "2016", "imdbID": "tt2975590", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
      { "Title": "Batman: The Dark Knight Returns, Part 1", "Year": "2012", "imdbID": "tt2313197", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg" }]
    wrapper = mount(
      <MemoryRouter>
        <Gallery
          list={list}
          isLoadingSubmitTitle={false}
          isLoadingMore={true}
          ref={ref}
        />
      </MemoryRouter>);
    const checkItemList = wrapper.find('Link').map((node) => node.text());
    const checkItemTitle = wrapper.find('.items_title').map((node) => node.text());
    const checkItemImage = wrapper.find('.items_image').map((node) => node.props().src);
    const LoadMore = wrapper.find('.load_more').text();

    expect(checkItemList).toHaveLength(3);
    expect(checkItemTitle)
      .toEqual([
        "Batman Begins",
        "Batman v Superman: Dawn of Justice",
        "Batman: The Dark Knight Returns, Part 1"]);
    expect(checkItemImage)
      .toEqual([
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"]);
    expect(LoadMore).toEqual('Loading More . . .')
  });
})
