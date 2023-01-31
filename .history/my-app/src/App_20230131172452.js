import React,{Component} from 'react';
import "./App.css";
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Search from './components/users/Search';
import PropTypes from 'prop-types';
import axios from 'axios'
import Users from './components/users/Users';

class App extends Component{
  state={
    users:[],
    loading:false
  }
  async componentDidMount(){
    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    // axios.get('https://api.github.com/users').then(res=>console.log(res.data));
    this.setState({loading:true})
    const res= await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET} `);
    console.log(res.data);
    this.setState({users:res.data,loading:false})

  }
  static defaultProps={
    title:"Github Finder",
    icon:'fab fa-github'
  }
  static propTypes={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  searchUsers= (te) =>{

  }
  render(){
  return (
   
    <div className="App">
       <Navbar title="Github Finder" icon='fab fa-github'/>

       <div className='container'>
        <Search searchUsers={this.searchUsers}/>
       <Users loading={this.state.loading} users={this.state.users}/>
       </div>
       
    </div>
  );
}
}
export default App;
