import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Input from './components/Input'
import Footer from './components/Footer'
import Movie from './components/Movie'
import Shows from './components/Movie'
import Details from './components/Details'
import { api, mountURL, changeURL, fallBackURL, genreURL, showURL, genreShowsURL, mountShowsURL } from './assests/config'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      shows: [],
      queryError: false,
      search: false,
      selectedMovie: [],
      select: false,
      genre: []
    }
  }


  filterResult(data) {
    return {
      poster: data.poster_path,
      rating: data.vote_average,
      title: data.name ? data.name : data.title,
      genre: this.gen(data.genre_ids),
      released: data.release_date,
      lang: data.original_language,
      overview: data.overview
    }
  }

  onChange(e) {
    const search = e.target.value
    const url = changeURL + `${search}&api_key=` + api
    const url2 = showURL + `${search}&api_key=` + api

    if (search === '') {
      this.setState({
        movies: [],
        shows: [],
        select: false,
        selectedMovie: []
      })
      return
    }

    //GET movies
    axios.get(url)
      .then(res => {
        const results = res.data.results
        if (results) {
          let movs = results.map(result => {
            return this.filterResult(result)
          })
          this.setState({
            movies: movs,
            search: true,
            select: false,
            selectedMovie: []
          })
        }
      })
      .catch(err => {
        if (err) {
          this.setState({ shows: {} })
        }
      })

    //GET shows
    axios.get(url2)
      .then(res => {
        const results = res.data.results
        if (results) {
          let showList = results.map(result => {
            return this.filterResult(result)
          })
          this.setState({
            shows: showList,
            search: true,
            select: false,
            selectedMovie: []
          })
        }
      })
      .catch(err => {
        if (err) {
          this.setState({ movies: {} })
        }
      })
  }

  genre() {
    axios.get(genreURL)
      .then(res => {
        const results = res.data.genres
        this.setState({ genre: results })
      })
      .catch(err => {
        if (err) {
          this.setState({
            movies: {}
          })
        }
      })
    axios.get(genreShowsURL)
      .then(res => {
        const results = res.data.genres
        this.setState({ genre: results })
      })
      .catch(err => {
        if (err) {
          this.setState({
            shows: {}
          })
        }
      })
  }


gen(genId) {
  let x = []
  this.state.genre.map(samp => {
    genId.map(genre => {
      if (samp.id === genre) {
        x.push(samp.name)
      }
    })
  })
  return x
}

componentDidMount() {
  this.genre()
  axios.get(mountURL)
    .then(res => {
      const results = res.data.results
      if (results) {
        let movs = results.map(result => {
          return this.filterResult(result)
        })
        this.setState({ movies: movs })
      }
    })
    .catch(err => {
      if (err) {
        this.setState({ movies: {} })
      }
    })

    axios.get(mountShowsURL)
    .then(res => {
      const results = res.data.results
      if (results) {
        let movs = results.map(result => {
          return this.filterResult(result)
        })
        this.setState({ shows: movs })
      }
    })
    .catch(err => {
      if (err) {
        this.setState({ shows: {} })
      }
    })
}

clickFallback() {
  axios.get(fallBackURL)
    .then(res => {
      const results = res.data.results
      if (results) {
        let movs = results.map(result => {
          return this.filterResult(result)
        })
        this.setState({
          movies: movs,
          shows: movs,
          search: false
        })
      }
    })
    .catch(err => {
      if (err) {
        this.setState({ movies: {} })
      }
    })
}

selectClick(m) {
  this.setState({
    select: !this.state.select,
    selectedMovie: m
  })
}

render() {

  const display = (
    <Tabs className="tabs" defaultIndex={0} onSelect={index => console.log(index)}>
      <TabList style={{ marginTop: 30 }}>
        <Tab>Movies</Tab>
        <Tab>TV Shows</Tab>
      </TabList>

      <TabPanel style={{ marginTop: 30 }}>
        <div className="body">
          {this.state.select ?
            <Details
              movie={this.state.selectedMovie}
              selClick={(e) => this.selectClick(e)} 
              /> :
            <Movie
              movie={this.state.movies}
              err={this.state.queryError}
              search={this.state.search}
              selClick={(e) => this.selectClick(e)}
              click={(e) => this.clickFallback(e)} 
              />
          }
        </div>
      </TabPanel>

      <TabPanel style={{ marginTop: 30 }}>
        <div className="body">
          {this.state.select ?
            <Details
              movie={this.state.selectedMovie}
              selClick={(e) => this.selectClick(e)} /> :
            <Shows
              movie={this.state.shows}
              err={this.state.queryError}
              search={this.state.search}
              selClick={(e) => this.selectClick(e)}
              click={(e) => this.clickFallback(e)} />
          }
        </div>
      </TabPanel>
    </Tabs>
  )

  return (
    <div className="App">
      <Header />
      <Input change={(e) => this.onChange(e)} />
      {display}
      <Footer />
    </div>
  );
}
}

export default App;