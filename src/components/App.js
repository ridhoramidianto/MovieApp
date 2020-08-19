import React, {Component} from 'react';
import Nav from './Nav';
import SearchArea from './SearchArea';
import MovieList from './MovieList';
import Pagination from './Pagination';


class App extends Component{

  constructor(){
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //fetch(`https://api.themoviedb.org/3/movie/?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&s=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.Search.splice(0,5)], totalResults: data.totalResults})
    })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  nextPage = (pageNumber) => {
    const apiPage = Math.ceil(pageNumber / 2);
    fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&s=${this.state.searchTerm}&page=${apiPage}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      pageNumber % 2 === 1 ? this.setState({movies: [...data.Search.splice(0,5)], currentPage: pageNumber}) : this.setState({movies: [...data.Search.splice(5,10)], currentPage: pageNumber})
    })
  }

  render() {
    const numElementsPerPage = 5;
    const numberPages = Math.floor(this.state.totalResults / 5);
    return (
      <div className = "App">
        <Nav />
        <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <MovieList movies={this.state.movies} />
        { this.state.totalResults > 5 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''}
      </div>
    );
  }


}

export default App;
