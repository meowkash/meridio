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

    render() {
        var menu, len; 
        try {
          len = this.state.elements.length;
        } catch (err) {
          len = 0;
        }
        console.log(len);
        if(len>0) {
            if(this.state.style === "horizontal") {
                menu = this.state.elements.map((elem) =>
                    <UserAvatar key={elem.id} userName={elem.name} userIcon={elem.icon} />
                );
            } else if (this.state.style === "vertical") {
                menu = this.state.elements.map((elem) => 
                    <FileListItem key={elem.id} fileName={elem.name} fileSize={elem.size} />
                );
            }
        }
        else {
          menu = <p class="DefaultMessage"> {this.props.defaultMessage} </p>
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
