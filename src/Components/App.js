import React, {Component} from 'react';
import Header from './Header';
import Contact from './Contact';
import About from './About';
import '../App';

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
