import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ShopPage from './Components/Shop/Shop';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Components/Sign_In_Up/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    //Establish session between app and Google.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() }
          })
        });
        console.log(this.state)
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //closing session.
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndSignUp}/>
      </div>
    );
  }
}

export default App;