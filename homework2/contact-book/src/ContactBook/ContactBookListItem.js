import React, { Component } from 'react'

export default class ContactBookListItem extends Component {
    onDeleteClick = () => {
        this.props.onDelete(this.props.item.id);
    };

    render() {
        const { item } = this.props;
        return (
            <li style={stylingLi}>
                { item.firstName }
                &nbsp;&nbsp;&nbsp;
                { item.lastName }
                &nbsp;&nbsp;&nbsp;
                { item.phone }
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={this.onDeleteClick} style={{color:'red'}}>x</span>
            </li>
        )
    }
}

const stylingLi = {
    padding: '7px 20px',
    marginBottom: '10px',
    borderRadius: '5px',
    borderLeft: '10px solid #f05d22', 
    boxShadow:'2px -2px 5px 0 rgba(0,0,0,.1), -2px -2px 5px 0 rgba(0,0,0,.1),2px 2px 5px 0 rgba(0,0,0,.1),-2px 2px 5px 0 rgba(0,0,0,.1)',
    fontSize: '16px',
    letterSpacing: '1px',
    transition: '0.3s all linear',
}