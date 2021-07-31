import React, { PureComponent } from 'react';
import { AppContext } from './AppContext';

class UserInfo extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {
          (props) => (
            <div>
              {console.log(props)}
              <p>USER IS: {props.isUserLogged ? 'Logged in' : 'Not logged'}</p>
            </div>
          )
        }
      </AppContext.Consumer>
    )
  }
}


export default UserInfo;