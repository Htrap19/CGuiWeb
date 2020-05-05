import React, { Component } from 'react';
import './Gallery.css';
import Spinner from '../../Spinner/Spinner';

const getGalleryData = async () => {
  const res = await fetch('https://cguiwebapi.herokuapp.com/gallery');
  const data = await res.json();

  const finalValue = [];

  data.forEach(mainArray => {
    mainArray.forEach(arrayContent => {
      finalValue.push(arrayContent);
    })
  })

  return finalValue;
}

const galleryContent = (GalleryItems, onDocsItemClickedCom) => {
  if(GalleryItems !== null && GalleryItems !== undefined && GalleryItems.length !== 0 && GalleryItems !== Object && GalleryItems !== Array) {
    return GalleryItems.map((item, index) => {
      return (
        <div key={index} className="type-container">
          <h2>{item.title}</h2>
          {
            item.contents.map((childitem, i) => {
              return (
                <div key={i} className="component">
                  <img alt="preview" src={childitem.imgsrc} width={childitem.imgw} height={childitem.imgh} />
                  <h4 onClick={onDocsItemClickedCom}>{childitem.name}</h4>
                </div>
              )
            })
          }
        </div>
      )
    })
  }
  else {
    return <Spinner />
  }
}

class Gallery extends Component {
  constructor(props) {
    super()
    this.state = {
      GalleryItems: []
    }
  }

  componentDidMount() {
    Promise.resolve(getGalleryData()).then( data => this.setState({ GalleryItems: data }) )
    .catch(console.log)
  }

  render() {
    return (
      <div className="gallery-container">
        <h2>Widgets Gallery</h2>
        <div className="gallery-child-container">
          {
            galleryContent(this.state.GalleryItems, this.props.onDocsItemClickedCom)
          }
        </div>
      </div>
    );
  }
}

export default Gallery;