import React, { Component } from 'react';
import Card from './CardComponent';

class NearbyUsersList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                <Card title="People" defaultMessage="No people found nearby" cardHeight="100px" renderStyle="horizontal" elementsToRender={this.props.users} />
            </React.Fragment>
        );
    }
}

export default NearbyUsersList;