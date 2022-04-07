import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FaCompressAlt, FaExpandArrowsAlt } from 'react-icons/fa';

function Header(props) {

  return (
  <div className="Header">
    <Card.Header className="w-100 mt-5 bt-5" style={{backgroundColor: '#254672'}}>
      <Row>
        <Col className="pt-0"><h2 className="float-left center">{props.name}</h2></Col>
        <Col className="pt-2">
          <h3>
           { props.btnIcon ? <FaCompressAlt className="float-right center" onClick={props.onClick} /> : <FaExpandArrowsAlt className="float-right center" onClick={props.onClick}/>}
          </h3>
        </Col>
      </Row>
    </Card.Header>
  </div>

  );
}

export default Header;