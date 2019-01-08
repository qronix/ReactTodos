import React, {Component} from 'react';

export class TodoList extends Component{
    state = {todos:[]};
    // constructor(props){
    //     super(props);
    //     // this.props.eventListener.call(this.eventListener);
    // }
    eventListener(action){
        // console.log(`Got action ${action}`);
        if(action === 'addTodo'){
            console.log('Adding new todo!');
        }else if(action === 'clearAll'){
            console.log('Clearing all todos');
        }else{
            console.log('Action was not defined');
        }
    };
    render(){
        return(<div>SUP Yo!</div>);
    };
};
