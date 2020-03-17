import React, {Component} from 'react'

class Footer extends Component {
  render(){
    return (
       <div className="footer">
        <div className="line"></div>
        <div className='footDesc'>
          <h5>Noam Kanonich <br/>
          <p style={{fontSize: 12, marginLeft: 0}}>B.Sc. Computer Science Graduate</p>
          </h5>
          <p>This app is using the MovieDB database and API to render data and movie information.<br/> Check out my app's source code on my <a href='https:/www.github.com/noamkanonich'>GitHub</a></p>
        </div>
        <div className='footcopy'>
          <p>2020 © All rights reserved</p>
        </div>
      </div>
    )
  }
}
export default Footer