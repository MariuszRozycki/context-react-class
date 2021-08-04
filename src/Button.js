import React, { PureComponent } from 'react';
import { AppContext } from './AppContext';

class Button extends PureComponent {
  static contextType = AppContext;

  render() {
    return (
      <div>
        <button onClick={this.context.toggleLoggedState}>Change user state</button>
      </div>
    )
  }
}

export default Button;