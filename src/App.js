import React, { Component } from 'react';
import Notes from './components/notes/notes'
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
class App extends Component {

  state = {
    sideDrawer : false
  }

  toggleHandler = ()=>{
    this.setState((prevState)=>{
      return {sideDrawer : !prevState.sideDrawer}
    })
  }

  render() {
    let backdropComponent;
    if(this.state.sideDrawer){
      backdropComponent =  <Backdrop click={this.toggleHandler}/>
    }
    return (
      <div className="App">
        <Toolbar hamButtonClick={this.toggleHandler}/>
        <SideDrawer sideDrawer={this.state.sideDrawer}/>
        {backdropComponent}

      </div>
    );
  }
}

export default App;
