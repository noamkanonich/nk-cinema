import React, { Component } from 'react'
import VideoDetail from '../youtube/video-detail'
import YTSearch from 'youtube-api-search'
import { AutoComplete } from 'material-ui'


class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null,
      watchTrailer: false
    }
    this.videoSearch('')
  }

  videoSearch(searchTerm) {
    YTSearch({ key: 'AIzaSyAqiWZ92cBD2Wdkl7AbtEC4IXRCzoWvyfk', term: searchTerm + 'Trailer'},
      (data => {
        this.setState({ videos: data, selectedVideo: data[0] })
      }))
  }

  render() {
    return (
      <div className="details">
        <img src={`https://image.tmdb.org/t/p/w200/${this.props.movie.poster}`} alt="" style={{ width: 200 }} />

        <h5 style={{ fontWeight: 'bold' }}>Title:
          <b className='textDetail'>{this.props.movie.title}</b></h5>
        <h5 style={{ fontWeight: 'bold' }}>Rating:
          <b className='textDetail'>{this.props.movie.rating}</b></h5>
        <h5 style={{ fontWeight: 'bold' }}>Language:
          <b className='textDetail'>{this.props.movie.lang}</b></h5>
        <h5 style={{ fontWeight: 'bold' }}>Date released:
          <b className='textDetail'>{this.props.movie.released}</b></h5>
        <h5 style={{ fontWeight: 'bold' }}>Genre:
    <b className='textDetail'>{this.props.movie.genre[0] ? this.props.movie.genre[0] : null}</b><b className='textDetail'>{this.props.movie.genre[1] ? '| ' + this.props.movie.genre[1] : null}</b>
   </h5>
        <h5 style={{ fontWeight: 'bold' }}>Overview:
          <b className='textDetail'>{this.props.movie.overview}</b></h5>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => this.props.selClick([])}
          style={{ fontSize: 18, marginTop: 10, width: 120, height: 50, fontWeight: 'bold', color: 'white' }}>Go Back</button>

        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => this.setState({watchTrailer: true})}
          style={{ fontSize: 18, marginTop: 10, width: 150, height: 50, marginLeft: 30, fontWeight: 'bold', color: 'white' }}>Watch Trailer</button>

        <div className="youtube" style={{width:800, height:400, marginLeft: 190, marginTop: 130 }}>

          {this.videoSearch(this.props.movie.title)}
          {this.state.watchTrailer ?
          <VideoDetail className="trailer" video={this.state.selectedVideo}  /> : null 
          }
        </div>

      </div>
    )
  }
}
export default Details