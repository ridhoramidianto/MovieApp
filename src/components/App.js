import React, {Component} from 'react';
import Nav from './Nav';
import SearchArea from './SearchArea';
import MovieList from './MovieList';
import Pagination from './Pagination';
import MovieInfo from './MovieInfo';


class App extends Component{

  constructor(){
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
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

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.imdbID == id);
    console.log(id)
    console.log(this.state.movies[0])
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    this.setState({currentMovie: newCurrentMovie})
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }

  render() {
    const numElementsPerPage = 5;
    const numberPages = Math.floor(this.state.totalResults / 5);
    return (
      <div className = "App indigo lighten-5">
        <Nav />
        { this.state.currentMovie == null ? <div><SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/> <MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} /></div> : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo}/>}      
        { this.state.totalResults > 5 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''}
      </div>
    );
  }


}

export default App;
