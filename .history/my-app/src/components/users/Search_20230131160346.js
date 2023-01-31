import React, { Component } from 'react'

export class Search extends Component {
    state={
        text:''
    }

    onChange = e =>{
        this.setState({text: e.target.value});
    }
  render() {
    return (
      <div>
        <form className='form'>
            <input type="text" name="text" placeholder='Search Users..' value={this.state.text} pnC/>
            <input type="submit" className="btn btn-dark btn-block" value="Search"/>
            
        </form>

      </div>
    )
  }
}

export default Search