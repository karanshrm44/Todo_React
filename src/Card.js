import React, { Component } from 'react';
import './Card.css';



class Card extends Component{
    
    state={
        value:false
    }
    
    render() {
    return(
           <div className="Card-Layout Card">
                  {this.props.item}
                <p onClick={this.props.onDelete} className="Card-Delete">Delete</p>
            </div>
    
    )
}
}

export default Card;