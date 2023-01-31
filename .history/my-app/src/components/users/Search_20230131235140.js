import React, { Component } from 'react'

export class Search extends Component {
    state={
        text:''
    }
    static propTypes={
      searchUsers

    }

    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }:

    onSubmit=(e)=>{
      e.preventDefault();
      this.props.searchUsers(this.state.text);
      this.setState({text:''})

    }
  render() {
    return (
      <div>
        <form  onSubmit={this.onSubmit}className='form'>
            <input type="text" name="text" placeholder='Search Users..' value={this.state.text} onChange={this.onChange}/>
            <input type="submit" className="btn btn-dark btn-block" value="Search"/>
            
        </form>
<button className='btn btn-light btn-block' onClick={this.props.clearUsers}>Clear</button>
      </div>
    )
  }
}

export default Search