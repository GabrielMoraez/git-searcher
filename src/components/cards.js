import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './assets/css/cards.css';



class Cards extends React.Component {
  
  render(){
    return (
      <div className="CardWrapper">
        <Row className="CardBody">
          <Col md={10} className="repoInfo">
            <div className="InfoWrapper reponame-wrapper"><a href={this.props.link}>{this.props.repositoryName}</a></div>
            <div className="InfoWrapper desc-wrapper">{this.props.repositoryDescription}</div>

            <div className="repoStats">
              <div className="InfoWrapper forks-wrapper"><i className="fas fa-code-branch"></i>{this.props.forks}</div>
              <div className="InfoWrapper followers-wrapper"><i className="fas fa-star"></i>{this.props.stars}</div>
            </div>
          </Col>

          <Col md={2} className="userInfo">
            <div className="InfoWrapper img-wrapper"><img alt="" src={this.props.photo} height="75" width="75" /> </div>
            <div className="InfoWrapper username-wrapper">{this.props.username}</div>
          </Col>

        </Row>
      </div>
    );
  }


}

export default Cards;