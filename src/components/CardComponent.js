import React, { Component } from 'react';
import './CardComponent.css';
import UserAvatar from './UserAvatarComponent';
import FileListItem from './FileListItemComponent';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
          elements: props.elementsToRender,
          style: props.renderStyle
        }
    }

    componentDidMount() {
      document.getElementById(`${this.props.title}CardContent`).style.height = this.props.cardHeight;
      console.log(this.state);
    }

    // menu = this.props.elementsToRender.map((elem) => {
      // this.setState( { menu : this.props.elementsToRender.map((elem) => {
      
      // })});
      // console.log(this.state);
    // });

    render() {
        var menu; 
        try {
          menu = this.state.elements.map((elem) => {
            if(this.state.style === "horizontal") {
              return (
                <UserAvatar key={elem.id} userName={elem.name} userIcon={elem.icon} />
              );
            }
            else if (this.state.style === "vertical") {
              return true;
            }
          });
        }
        catch(err) {
          menu = () => {
            return (
              <p id={`${this.props.title}DefaultMessage`}> {this.props.defaultMessage} </p>
            );
          }
        }
        return (
            <div className="Card">
                <div className="CardHeader" id={`${this.props.title}CardHeader`}>
                  <p className="CardTitle"> {this.props.title} </p>            
                </div>
                <div className="CardContent" id={`${this.props.title}CardContent`}>
                  {menu}
                </div>
            </div>
        );
    }
}

export default Card;
