import React, { Component } from 'react'
import './Installation.css';
import Spinner from '../../Spinner/Spinner'

const getDownloadsInfo = async () => {
  return (await fetch('https://cguiwebapi.herokuapp.com/installation/downloadinfo')).json();
}

const downloadsContentArea = ( InstallationItems ) => {
  if(InstallationItems !== undefined && InstallationItems !== null && InstallationItems.length !== 0) {
    return (
      <div className="install-container">
        {
          InstallationItems.map((data, i) => {
            return (
              <div key={i} className="card">
                <span style={{ backgroundColor: data.firstcolor }} id="after"></span>
                <span style={{ backgroundColor: data.secondcolor }} id="before"></span>
                <img width={data.imgw} height={data.imgh} src={data.imagesrc} alt="icon"/>
                <h3>{data.title}</h3>
                <p>{data.info}</p>
                <div className="content">
                  <h3 id="ctitle">{data.title}</h3>
                  <h4 onClick={() => {
                    if((data.clicktype === 'link' || data.clicktype === 'download') && (data.clicktype !== undefined && data.clicktype !== null))
                      window.location.href = data.visiturl
                  }} style={{ backgroundColor: data.secondcolor, color: data.textcolor }} >{data.text}</h4>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
  else
    return <Spinner />
}

class Installation extends Component {
  constructor(props) {
    super();
    this.state = {
      InstallationItems: []
    }
  }

  componentDidMount() {
    Promise.resolve(getDownloadsInfo()).then(result => this.setState({ InstallationItems: result }))
  }

  render() {
    return (
      <div className ="di-container">
        <h2>Downloads</h2>
          {
            downloadsContentArea(this.state.InstallationItems)
          }
      </div>
    )
  }
}

export default Installation;