import React, {Component, Fragment} from 'react'
import Fallback from './NoResults'

class Shows extends Component {
  render(){
    let shows = []
    if(this.props.err){
      shows.push(
        <Fallback 
          click={this.props.click}
          key={1}/>
      )
    } else if (this.props.show.length === 0){
      shows.push(
        <Fallback 
          click={this.props.click}
          key={1}/>
      )
    } else if(this.props.show){
      this.props.movie.map((show, i) => {
        return shows.push(
          <div className="movie" key={i}>
          <div className="card">
            <img className="card-img-top"
            src={`https://image.tmdb.org/t/p/w200/${show.poster}`}
            alt='123'
            onClick={()=>this.props.selClick(show)}/>
            <div className='rating'>{show.rating}</div>
            <div className="card-body">
              <h5 className="card-title" style={{fontSize: 16.5}}>{show.title.length > 20 ? show.title.slice(0, 22)+'...' : show.title}</h5>
              <p className="card-text" >{show.genre[0]} | {show.genre[1]} | {show.genre[2]}</p>
            </div>
          </div>
        </div>
      )
    })
  }
    return (
      <Fragment>
        <div className="bodyHead"> 
          <h5>{this.props.search ? 'Search Results' : 'Trending Now'}</h5>
        </div>
        {shows}
      </Fragment>
    )
  }
}
export default Shows;