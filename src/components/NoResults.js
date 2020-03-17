import React, {Component} from 'react'

class NoResult extends Component{
  clicked(){
    this.props.click()
  }
  render(){
    return (
      <div className='fallBack'>
        <h5>Sorry, no results found.</h5>
        <p>Just try most <b onClick={this.props.click}>trendy movies / tv shows</b> instead!</p>
      </div>
    )
  }
}
export default NoResult