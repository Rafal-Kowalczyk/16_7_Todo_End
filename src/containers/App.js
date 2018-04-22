import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from "./../components/Title";
import TodoList from "./../components/TodoList";
import TodoForm from "./../components/TodoForm";
import Todo from "./../components/Todo";


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                id: 1,
                    text: 'read the module'
                }, {
                id: 2,
                    text: 'do the job'
                }, {
                id: 3,
                    text: 'send to git'
                }
            ]
        };
    }
   
    addTodo(val, e) {
        e.preventDefault ();
        e.stopPropagation ();
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    //    this.setState({
    //        input:""
    //   });
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    onChangeHandler(event) {
        const task = event.target.value;
        this.setState({input: task});
        event.preventDefault();
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title counter={this.state.data.length}/>
                <TodoForm
                    input={this.state.input}
                    fill={this.onChangeHandler.bind(this)}
                    submit={this.addTodo.bind(this)}
                />
                <TodoList 
                    items={this.state.data} 
                    remove={this.removeTodo.bind(this)}
                />                  
            </div>
        );
    }
}

export default App;