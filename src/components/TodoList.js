import React, {Component} from 'react';
import {TodoItem} from './TodoItem';

export class TodoList extends Component{
    state = {todos:[],todoEls:[]};

    eventListener(action){
        if(action === 'addTodo'){
            this.addTodoEl();
        }else if(action === 'clearAll'){
            this.clearAllTodos();
        }else{
            console.log('Action was not defined');
        }
    };
    addTodoEl(){
        let todo = <TodoItem key={this.state.todoEls.length} taskName={'New Todo'} completed={false}/>
        this.setState({todoEls:[...this.state.todoEls,todo]});
    };
    clearAllTodos(){
        this.setState({todoEls:[]});
    };
    render(){
        return(<div className='debug'>{this.state.todoEls}</div>);
    };
};
