import React,{Component} from 'react';
import {ControlButton} from './ControlButton';

export class ControlPanel extends Component{
    state = {buttons:[],componentToControl:''};
    constructor(props={buttons:[],componentToControl:''}){
        super(props);
        this.handleAction = this.handleAction.bind(this);
    };
    componentDidMount(){
        this.setupButtons(this.props.buttons);
        this.componentToControl(this.props.componentToControl);
    };
    setupButtons(buttons){
        const buttonEls = buttons.map((button)=>{
            return(
                <ControlButton key={button.action} onClick={this.handleAction} button={button}></ControlButton>
            );
        });
        this.setState({buttons:buttonEls});
        console.log(this.state.buttons);
    };
    componentToControl(target){
        this.setState({componentToControl:target});
    };
    handleAction(action){
        this.props.eventEmitter(action);
    };
    render(){
        console.log(this);
        return(
            <div className="container">{this.state.buttons}</div>
        );
    };
};