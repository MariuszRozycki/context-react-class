import React, { PureComponent } from 'react';
import { AppContext } from './AppContext';

class UserInfo extends PureComponent {
  static contextType = AppContext;

  render() {
    const { isUserLogged } = this.context;
    const userLoggedInfo = isUserLogged ? 'Logged in' : 'Not logged'

    return (
      <div>
        <p>USER IS: {userLoggedInfo}</p>
      </div>
    )
  }
}


export default UserInfo;