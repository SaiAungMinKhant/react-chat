import {React,Component} from 'react';
import Signin from './components/SignIn';
import Navigation from './components/Navigation';
import './App.css';
import Register from './components/Register';

const initialState = {
  route : 'signin',
  isSignIn : false
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render(){
    const {isSignIn,route} = this.state;
    return(
      <div className='App'>
        <Navigation isSignIn={isSignIn} onRouteChange={this.onRouteChange} />
        {
          route === 'signin'
          ? <Signin />
          : <Register />
        }
      </div>
    )
  }
}

export default App;
