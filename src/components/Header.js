import React, {Component, Fragment} from 'react'


class Header extends Component {
  render(){
  
    return(
      <Fragment>
        <div className="header">
          <h1 style={{fontSize: 70}}>NK Movie & TV Shows App</h1> 
          <p style={{fontSize: 20, marginTop: 20, fontFamily: 'Century Gothic'}}>Welcome to the world's best movies & TV shows search app.<br/> Enter a movie / TV show name and you will receive all the information you need. </p>
        </div>
      </Fragment>
    )
  }
}
export default Header;