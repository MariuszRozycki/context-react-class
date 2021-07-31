import React, { PureComponent } from 'react';
import { AppContext } from './AppContext';

class Button extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {
          (props) => (
            <div>
              <button onClick={props.toggleLoggedState}>Change user state</button>
            </div>
          )
        }
      </AppContext.Consumer>
    )
  }
}

export default Button;