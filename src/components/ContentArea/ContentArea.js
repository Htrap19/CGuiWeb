import React from 'react';
import Gallery from './Gallery/Gallery';
import Docs from './Docs/Docs';
import Installation from './Installation/Installation'

const contentArea = (onBackButtonClicked, activecontentarea, onDocsItemClicked, onDocsItemClickedCom, docsactivearea) => {
  if(activecontentarea === 'Gallery' || activecontentarea === '')
    return <Gallery onDocsItemClickedCom={onDocsItemClickedCom}/>
  else if(activecontentarea === 'Docs')
    return <Docs onBackButtonClicked={onBackButtonClicked} docsactivearea={docsactivearea} onDocsItemClicked={onDocsItemClicked}/>
  else if(activecontentarea === 'Installation')
    return <Installation />
}

const ContentArea = ({ onBackButtonClicked, activecontentarea, onDocsItemClicked, onDocsItemClickedCom, docsactivearea }) => {
  return (
    <div>
      {
        contentArea(onBackButtonClicked, activecontentarea, onDocsItemClicked, onDocsItemClickedCom, docsactivearea)
      }
    </div>
  );
}

export default ContentArea;