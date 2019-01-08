import React, {Component} from 'react';

export class ControlButton extends Component{
    state = {action:'',color:'',displayText:''};

    componentDidMount(){
        this.setupButton();
    };
    setupButton(){
        const {action,color,displayText} = this.props.button;
        this.setState({action,color,displayText});
    };

    render(){
        return(
            <button onClick={()=>this.props.onClick(this.state.action)} className={`ui ${this.state.color} basic button mini controlButton`}>{this.state.displayText}</button>
        );
    };
};