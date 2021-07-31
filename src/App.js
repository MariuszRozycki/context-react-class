import React, { PureComponent } from 'react';
import { AppContext, defaultObject } from './AppContext';

import Button from './Button';
import UserInfo from './UserInfo';

import './App.css';



class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged
  }

  render() {
    return (
      <div className="App">

        <AppContext.Provider value={{
          isUserLogged: this.state.isUserLogged,
          toggleLoggedState: this.handleToggleLoggedState
        }}>
          <UserInfo />
          <Button />
        </AppContext.Provider>
      </div>
    );
  }

  handleToggleLoggedState = () =>
    this.setState(prevState => ({
      isUserLogged: !prevState.isUserLogged
    }))
}

export default App;


