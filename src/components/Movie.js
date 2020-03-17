import React, {Component, Fragment} from 'react'
import Fallback from '../components/NoResults'

class Movie extends Component {
  render(){
    let movies = []

    if(this.props.err) {
      movies.push(
        <Fallback click={this.props.click} key={1} />
      )
    }  

    else if (this.props.movie.length === 0){
      movies.push(
        <Fallback click={this.props.click} key={1} />
      )
    } 

    else if(this.props.movie) {
      this.props.movie.map((m, i) => {
        return movies.push(
          <div className="movie" key={i}>
          <div className="card">
            <img className="card-movie-poster"
            src={`https://image.tmdb.org/t/p/w200/${m.poster}`}
            alt='123'
            onClick={()=>this.props.selClick(m)}/>
            <div className='rating'> {m.rating} </div>
            <div className="card-body" style={{border: 0 }}>
              <h5 className="card-title" style={{fontSize: 18, marginTop: -7, marginLeft: -20}}>{m.title.length > 20 ? m.title.slice(0, 20)+ '..' : m.title}</h5>
              <p className="card-text" style={{marginLeft:-20}}>{m.genre[0]} | {m.genre[1]} | {m.genre[2]}</p>
            </div>
          </div>
        </div>
      )
    })
  }
    return (
      <Fragment>
        <div className="bodyHead"> 
          <h4 style={{marginLeft: 30, fontSize: 27}}>{this.props.search ? 'Search Results' : 'Trending Now'}</h4>
        </div>
        {movies}
      </Fragment>
    )
  }
}
export default Movie