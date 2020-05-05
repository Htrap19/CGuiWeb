import React, { Component } from 'react';
import './SupportArea.css';

const getSupportContent = async () => {
  return (await fetch('https://cguiwebapi.herokuapp.com/support')).json();
}

class SupportArea extends Component {
  constructor() {
    super();
    this.state = {
      SupportAreaItems: []
    }
  }

  componentDidMount() {
    Promise.resolve(getSupportContent()).then(data => { this.setState({ SupportAreaItems: data }) })
  }

  render() {
    return (
      <div className="supportarea">
        <h2>Support</h2>
        <div className="content">
          {
            this.state.SupportAreaItems.map((data, i) => {
              return (
                <div key={i} className="image">
                  <img style={{ background: data.restimagecolor }} src={data.restimagesrc} alt="icon"/>
                  <img style={{ background: data.realimagecolor, boxShadow: `0px 0px 10px ${data.shadowcolor}, 0px 0px 40px ${data.shadowcolor}, 0px 0px 80px ${data.shadowcolor}` }} src={data.realimagesrc} alt="icon"/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default SupportArea;