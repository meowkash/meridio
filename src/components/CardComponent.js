import React, { Component } from 'react';
import './CardComponent.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      document.getElementById(`${this.props.title}CardContent`).style.height = this.props.cardHeight;
    }

    render() {
        return (
            <div className="Card">
                <div className="CardHeader" id={`${this.props.title}CardHeader`}>
                  <p className="CardTitle"> {this.props.title} </p>            
                </div>
                <div className="CardContent" id={`${this.props.title}CardContent`}>
                  <p id={`${this.props.title}DefaultMessage`}> {this.props.defaultMessage} </p>
                </div>
            </div>
        );
    }
}

export default Card;
