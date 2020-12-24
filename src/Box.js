import React, {Component} from 'react';
import './Box.css';
import {colorGenerator} from './helpers';

class Box extends Component {

    constructor(props){
        super(props);
        this.state = {color: colorGenerator()};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({color: colorGenerator()});
    }
    
    render(){
        return (
            <div className="Box" 
                style={{backgroundColor:this.state.color}}
                onClick={this.handleClick}>
            </div>
        );
    }
}
export default Box;