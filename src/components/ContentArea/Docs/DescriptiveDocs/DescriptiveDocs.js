import React, { Component } from 'react';
// import { DescriptiveDocsItems } from './DescriptiveDocsItems';
import './DescriptiveDocs.css';
import back from './back.png';
import Spinner from '../../../Spinner/Spinner';
import hljs from 'highlight.js';
import cpp from 'highlight.js/lib/languages/cpp';
import 'highlight.js/styles/vs2015.css';

hljs.registerLanguage('cpp', cpp);

const checkFuncDefaultValues = (desdata) => {
  if(desdata.defaultValues !== null && desdata.defaultValues !== undefined && desdata.defaultValues.length !== 0) {
    return (
      <div className="docs-info-funcdefault">
        <h4>Default Values</h4>
        {
          desdata.defaultValues.map((defdata, defindex) => {
            return <h5 key={defindex}>{`${defdata.target}: ${defdata.value}`}</h5>
          })
        }
      </div>
    )
  }
}

const checkFuncReturnValue = (desdata) => {
  if(desdata.returnValue !== null && desdata.returnValue !== undefined) {
    return (
      <div className="docs-info-funcreturn">
        <h4>Return Value</h4>
        <h5>{desdata.returnValue}</h5>
      </div>
    )
  }
  else {
    return <div className="docs-info-funcreturn"></div>
  }
}

const checkFuncNotes = (desdata) => {
  if(desdata.functionNotes !== null && desdata.functionNotes !== undefined) {
    return <h5>{`Note: ${desdata.functionNotes}`}</h5>
  }
}

const checkEnums = (data) => {
  if(data.enums !== null && data.enums !== undefined && data.enums.length !== 0) {
    return (
      <div className="docs-info-enums">
        <h3>Enums</h3>
        {
          data.enums.map((enudata, enuindex) => {
            return (
              <div key={enuindex}>
                <h4>{enudata.name}</h4>
                {
                  enudata.contents.map((condata, conindex) => {
                    return <h5 key={conindex}>{`${condata.name} - ${condata.usedFor}`}</h5>
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

const getDiscriptiveDocs = async (activearea) => {
  return (await fetch(`http://localhost:3001/docs/${activearea}`)).json();
}

const getUsage = async (activearea) => {
  return (await fetch(`http://localhost:3001/usage/${activearea}`)).json();
}

const SyntaxHighlight = (code) => {
  return hljs.highlight('cpp', code).value;
}

const contentArea = (activearea, onBackButtonClicked, DescriptiveDocsItems, Usage) => {
  if(DescriptiveDocsItems !== undefined && DescriptiveDocsItems !== null && DescriptiveDocsItems.length !== 0 && Usage.length !== 0) {
    return (
      DescriptiveDocsItems.map((data, index) => {
        if(data.title === activearea) {
          return (
            <div key={index} className="docs-info-parent">
              <img onClick={onBackButtonClicked} src={back} alt="back button"/>
              <div className="docs-img">
                <img alt="preview" src={data.imagesrc} width={data.imgw} height={data.imgh}/>
              </div>
              <div className="docs-info">
                <h2>{data.title}</h2>
                <h4>{`${data.title} -- ${data.description}`}</h4>
                <div className="docs-info-rela">
                  <h3>Relations</h3>
                  {
                    data.relations.map((reladata, relaindex) => {
                      return <h4 key={relaindex}>{`${reladata.name}: ${reladata.value}`}</h4>
                    })
                  }
                </div>
                <div className="docs-info-func">
                  <h3>Methods</h3>
                  {
                    data.functions.map((funcdata, funcindex) => {
                      return <h4 onClick={() => { document.getElementsByClassName(funcdata.functionSyntax)[0].scrollIntoView() } } key={funcindex}><span id="returnType">{funcdata.returnType}</span> {funcdata.functionSyntax}</h4>
                    })
                  }
                </div>
                <div className="docs-info-discfunc">
                  <h3>Description of Methods</h3>
                  {
                    data.descriptiveFunctions.map((desdata, desindex) => {
                      return (
                        <div key={desindex}>
                          <h4 className={data.functions[desindex].functionSyntax} >{data.functions[desindex].functionSyntax}</h4>
                          <pre>
                            <code>
                              {`${desdata.returnType} ${desdata.functionSyntax}`}
                            </code>
                          </pre>
                          <h5>{desdata.functionDescription}</h5>
                          {
                            checkFuncNotes(desdata)
                          }
                          {
                            checkFuncDefaultValues(desdata)
                          }
                          {
                            checkFuncReturnValue(desdata)
                          }
                        </div>
                      )
                    })
                  }
                </div>
                {
                  checkEnums(data)
                }
              </div>
              <div className="code-usage">
                <h2>Usage</h2>
                <div className="code-container">
                  {
                    Usage.examples.map((example, i) => {
                      return (
                        <div className="content">
                          <div className="code-session">
                            <label>Example</label>
                            <code dangerouslySetInnerHTML={{ __html: SyntaxHighlight(example) }} id="code"></code>
                          </div>
                          <div className="result-session">
                            <label>Result</label>
                            <img src={Usage.results[i].imgsrc} alt="result"/>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          )
        }
      })
    )
  }
  else {
    return <Spinner />
  }
}

class DescriptiveDocs extends Component {
  constructor(props) {
    super();
    this.state = {
      DescriptiveDocsItems: [],
      Usage: []
    }
  }

  componentDidMount(){
    Promise.resolve(getDiscriptiveDocs(this.props.activearea)).then(result => { this.setState({ DescriptiveDocsItems: [result] }) });
    Promise.resolve(getUsage(this.props.activearea)).then(result => { this.setState({ Usage: result }) });
  }

  render() {
    return (
      <div>
        {
          contentArea(this.props.activearea, this.props.onBackButtonClicked, this.state.DescriptiveDocsItems, this.state.Usage)
        }
      </div>
    )
  }
}

export default DescriptiveDocs;