import React, { Component } from 'react';
import './Docs.css';
import DescriptiveDocs from './DescriptiveDocs/DescriptiveDocs';
import Spinner from '../../Spinner/Spinner';

const getDocsList = async () => {
  const res = await fetch('http://localhost:3001/docs/list')
  const data = await res.json();

  const finalContent = [];

  data.forEach(arrayData => {
    arrayData.forEach(value => {
      finalContent.push(value);
    })
  })

  return finalContent;
}

const docsContent = (DocsItems, activearea, onDocsItemClicked, onBackButtonClicked) => {
  window.scrollTo(0, 0);

  if(activearea === 'Docs' || activearea === '') {
    return (
      <div className="docs-child-container">
        {
          DocsItems.map((data, index) => {
            return (
              <div key={index} className="docs-card-container">
                <h3>{data.title}</h3>
                {
                  data.contents.map((ref, i) => {
                    return (
                      <h4 key={i} onClick={onDocsItemClicked}>{ref}</h4>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
  else {
    return <DescriptiveDocs activearea={activearea} onBackButtonClicked={onBackButtonClicked} />
  }
}

const beforeDocsContent = (DocsItems, activearea, onDocsItemClicked, onBackButtonClicked) => {
  if(DocsItems !== undefined && DocsItems !== null && DocsItems.length !== 0 && DocsItems !== Object) {
    return docsContent(DocsItems, activearea, onDocsItemClicked, onBackButtonClicked)
  }
  
  return <Spinner />
}

class Docs extends Component {
  constructor(props) {
    super()
    this.state = {
      DocsItems: []
    }
  }

  componentDidMount() {
    Promise.resolve(getDocsList()).then(data => this.setState({ DocsItems: data }));
  }

  render() {
    return (
      <div className="docs-container">
        <h2>Documentation</h2>
        {
          beforeDocsContent(this.state.DocsItems, this.props.docsactivearea, this.props.onDocsItemClicked, this.props.onBackButtonClicked)
        }
      </div>
    );
  }
}

export default Docs;