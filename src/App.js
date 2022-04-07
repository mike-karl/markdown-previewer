import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Container';
import Header from './Header.js';
import Editor from './Editor.js';
import Previewer from './Previewer.js'
import './App.scss';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`js
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdown, setMarkdown] = useState(placeholder)
  const [editorExpanded, setEditorExpanded] = useState(false);
  const [previewerExpanded, setPreviewerExpanded] = useState(false);
  const [btnIcon, setBtnIcon] = useState(false)
  
  function handleChange(event) {
    event.preventDefault();
    setMarkdown(event.target.value);
  };

  function handleEditorExpanded() {
    setEditorExpanded(!editorExpanded);
    setBtnIcon(!btnIcon);
    console.log("Editor Expander clicked!")
  }

  function handlePreviewerExpanded() {
    setPreviewerExpanded(!previewerExpanded);
    setBtnIcon(!btnIcon);
    console.log("Preview Expander clicked!")
  }
  return (
    <div className="App">
        {editorExpanded ?  
            <Card className="w-75 h-50">
              <Header name='Editor' btnIcon={btnIcon} onClick={handleEditorExpanded}/>
              <Editor markdown={markdown} onChange={handleChange} /> 
            </Card>
        : previewerExpanded ?         
          <Card className="w-75">
            <Header name='Previewer' btnIcon={btnIcon} onClick={handlePreviewerExpanded}/>
            <Previewer markdown={markdown} onChange={handleChange}/> 
          </Card>
          
        :
          <div>
            <Card className="w-50">
              <Header name='Editor' onClick={handleEditorExpanded}/>
              <Editor markdown={markdown} onChange={handleChange} />
           </Card>
           <Card className="w-75">
              <Header name='Previewer' onClick={handlePreviewerExpanded}/>
             <Previewer markdown={markdown} onChange={handleChange}/> 
           </Card>
          </div>
        }
      
    </div>
  );
}

export default App;
