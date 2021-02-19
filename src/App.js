import React, {Component} from 'react';
import Contact from './Components/Contact';
import About from './Components/About';
import Header from './Components/Header'
import Selector from './Components/Selector'
import './App.css';

class App extends Component() {
  state = {
    selectContainer: 'About'
  };
  selection = select => {
    this.setState({
      selectContainer: select
    })
  }
render(){
  function chooseSection() {
    switch (this.state.selectContainer) {
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />
      default: return <h2>Error Loading</h2>
    }
  }

  return (
    <div>
      <Header />
      <Selector onSelect={this.onSelect} selectContainer={this.state.selectContainer} />
      {chooseSection()}
    </div>
    )
  }
}

export default App;
