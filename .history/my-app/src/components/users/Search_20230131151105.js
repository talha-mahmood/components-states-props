import React, { Component } from 'react'

export class Search extends Component {
    state={
        
    }
  render() {
    return (
      <div>
        <form className='form'>
            <input type="text" name="text" placeholder='Search Users..'/>
            <input type="submit" className="btn btn-dark btn-block" value="Search"/>
            
        </form>

      </div>
    )
  }
}

export default Search