import MovieCard from './index';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import React from 'react'

describe('TestCase MovieCard', () => {
  let wrapper;

  test('Check MovieCard', () => {
    const setShowPoster = jest.fn()
    const detail = {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane, David S. Goyer, Christopher Nolan",
      "Actors": "Christian Bale, Michael Caine, Ken Watanabe",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
      "Language": "English, Mandarin",
      "Country": "United Kingdom, United States",
      "Awards": "Nominated for 1 Oscar. 13 wins & 79 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      "Ratings": [{
        "Source": "Internet Movie Database",
        "Value": "8.2/10"
      }, {
        "Source": "Rotten Tomatoes",
        "Value": "84%"
      }, {
        "Source": "Metacritic",
        "Value": "70/100"
      }],
      "Metascore": "70",
      "imdbRating": "8.2",
      "imdbVotes": "1,334,626",
      "imdbID": "tt0372784",
      "Type": "movie",
      "DVD": "09 Sep 2009",
      "BoxOffice": "$206,852,432",
      "Production": "Warner Brothers, Di Bonaventura Pictures",
      "Website": "N/A",
      "Response": "True"
    }
    wrapper = mount(
      <MovieCard
        detail={detail}
        setShowPoster={setShowPoster}
      />);
    
    const checkTitle = wrapper.find('.title').text()
    expect(checkTitle).toEqual('Batman Begins')
    const checkYear = wrapper.find('.year').text()
    expect(checkYear).toEqual('2005')
    const checkRelased = wrapper.find('.relased').text()
    expect(checkRelased).toEqual('15 Jun 2005')
    const checkRuntime = wrapper.find('.runtime').text()
    expect(checkRuntime).toEqual('140 min')
    const checkGenre = wrapper.find('.genre').text()
    expect(checkGenre).toEqual('Action, Adventure')
    const checkDirector = wrapper.find('.director').text()
    expect(checkDirector).toEqual('Christopher Nolan')
    const checkWriter = wrapper.find('.writer').text()
    expect(checkWriter).toEqual('Bob Kane, David S. Goyer, Christopher Nolan')
    const checkActors = wrapper.find('.actors').text()
    expect(checkActors).toEqual('Christian Bale, Michael Caine, Ken Watanabe')
    const checkPlot = wrapper.find('.plot').text()
    expect(checkPlot).toEqual('After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.')
    const checkLanguage = wrapper.find('.language').text()
    expect(checkLanguage).toEqual('English, Mandarin')
    const checkCountry = wrapper.find('.country').text()
    expect(checkCountry).toEqual('United Kingdom, United States')
    const checkRating = wrapper.find('.rating').text()
    expect(checkRating).toEqual('Rotten Tomatoes Rated: 84%')
    const checkImdbRating = wrapper.find('.imdb_rating').text()
    expect(checkImdbRating).toEqual('8.2')
    const checkImdbVotes = wrapper.find('.imdb_votes').text()
    expect(checkImdbVotes).toEqual('1,334,626')
    const checkBoxOffice = wrapper.find('.box_office').text()
    expect(checkBoxOffice).toEqual('$206,852,432')
  });
})
