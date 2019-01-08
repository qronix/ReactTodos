import React, {Component} from 'react';
import {ControlPanel} from './ControlPanel';
import {TodoList} from './TodoList';
import {buttons} from '../config/config';

class App extends Component{
    state = {actionSent:false};

    constructor(props){
        super(props);
        this.TodoList = React.createRef();
        this.eventHandler = this.eventHandler.bind(this);
        this.eventDispatch = this.eventDispatch.bind(this);
    };
    eventHandler(action){
        this.eventDispatch(action);
    };
    eventDispatch(action){
        console.log(this);
        this.TodoList.current.eventListener(action);
    };

    render(){
        console.log(buttons);
        return(
            <div className="ui container">
                <ControlPanel buttons={buttons} eventEmitter={this.eventHandler}/>
                <TodoList ref={this.TodoList} eventListener={this.eventDispatch}/>
            </div>
        );
    };
};

export default App;