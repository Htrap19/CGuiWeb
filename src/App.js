import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import ContentArea from './components/ContentArea/ContentArea';
import SupportArea from './components/SupportArea/SupportArea';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activecontentarea: '',
      docsactivearea: ''
    }
  }

  changeStyleOnNavbar = (target, name) => {
    if(document.getElementsByClassName('active')[0] !== undefined)
      document.getElementsByClassName('active')[0].className = null;
    target.className = 'active';
    document.title = `C Gui - ${name}`;
  }

  onNavbarItemChange = ({ target }) => {
    this.changeStyleOnNavbar(target, target.innerHTML);
    this.setState({ activecontentarea: target.innerHTML });
  }

  onDocsItemClicked = (event) => {
    this.setState({ docsactivearea: event.target.innerHTML });
  }

  onDocsItemClickedCom = (event) => {
    this.setState({ activecontentarea: 'Docs' });
    this.setState({ docsactivearea: event.target.innerHTML });
    this.changeStyleOnNavbar(document.getElementById('docs'), document.getElementById('docs').innerHTML)
  }

  onBackButtonClicked = () => {
    this.setState({ docsactivearea: '' });
  }

  componentDidMount() {
    if(this.state.activecontentarea === '')
      this.changeStyleOnNavbar(document.getElementById('gallery'), document.getElementById('gallery').innerHTML);
  }

  render() {
    return (
      <div>
        <Navbar onNavbarItemChange={this.onNavbarItemChange} />
        <ContentArea onBackButtonClicked={this.onBackButtonClicked} onDocsItemClicked={this.onDocsItemClicked} onDocsItemClickedCom={this.onDocsItemClickedCom} docsactivearea={this.state.docsactivearea} activecontentarea={this.state.activecontentarea} />
        <SupportArea />
      </div>
    );
  }
}

export default App;
