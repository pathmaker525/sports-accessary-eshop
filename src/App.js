import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ShopPage from './Components/Shop/Shop';
import Header from './Components/Header/Header';
import SignInAndSignUp from './Components/Sign_In_Up/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/User/user-actions';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    //Establish session between app and Google.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: { id: snapShot.id, ...snapShot.data() }
          })
          //console.log(this.state)
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //closing session.
  }


  render() {
    return (
      <div>
        <Header />
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndSignUp}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);