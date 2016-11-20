'use strict';

import React, { Component } from 'react';

class BaseContainer extends Component {
  
  static contextTypes = {
    openDrawer: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {};
    
    (this: any).handleShowMenu = this.handleShowMenu.bind(this);
  }

  handleShowMenu() {
    this.context.openDrawer();
  }

}


export default BaseContainer;