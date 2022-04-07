import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

function Editor(props) {

  return (
      <div className="Editor">
        <Card.Body className="w-100 h-75 mb-5" style={{backgroundColor: '#9dc7ff'}}>
            <textarea 
            type="text"
            value={props.markdown} 
            id="editor" 
            onChange={ event => { 
                event.preventDefault();
                props.onChange(event)
                }
            } 
            />
        </Card.Body>
      </div>
  );
}

export default Editor;