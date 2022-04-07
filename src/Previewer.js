import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import themeStyle from "react-syntax-highlighter/dist/esm/styles/prism/dracula";
import { Card } from 'react-bootstrap';
import './Previewer.scss'

function Previewer(props) {
  return (
    <div className="Previewer">
        <Card.Body className="w-100 mb-5" id="preview" style={{backgroundColor: '#9dc7ff'}}>
        <ReactMarkdown
          children={props.markdown}
          remarkPlugins={[[remarkGfm], [remarkBreaks]]}
          components={{
            a: ({ ...props }) => <a target={"_blank"} {...props} />,
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  customStyle={{ margin: 0, paddingLeft: "10px" }}
                  style={themeStyle}
                  showLineNumbers={true}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        />   
        </Card.Body>
    </div>
  );
}

export default Previewer;