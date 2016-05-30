import React from 'react';
import './todo.css';

var data = [
    {date: "2016-05-21", title: "lalallalalalal"},
    {date: "2016-05-21", title: "lalallalalalal"},
    {date: "2016-05-21", title: "lalallalalalal"},
    {date: "2016-05-21", title: "lalallalalalal"},
    {date: "2016-05-21", title: "lalallalalalal"},
    {date: "2016-05-21", title: "lalallalalalal"},
    {date: "2016-05-21", title: "lalallalalalal"},
    {date: "2016-05-21", title: "lalallalalalal"},
    {date: "2016-05-21", title: "lalallalalalal"},
    {date: "2016-05-21", title: "lalallalalalal"},
    {date: "2016-05-21", title: "lalallalalalal"},
    {date: "2016-05-21", title: "lalallalalalal"},
    {date: "2016-05-21", title: "lalallalalalal"},
    {date: "2016-05-21", title: "lalallalalalal"}
];

var TodoNode = React.createClass({
    render: function () {
        return (
            <div className="todo-note">
                <span>{this.props.children}</span>
                <span>{this.props.date}</span>
            </div>
        );
    }
})

var TodoList = React.createClass({
    render: function () {
        var todoNoteList = this.props.data.map(function (todoNote) {
            return <TodoNode date={todoNote.date}>{todoNote.title}</TodoNode>
        })
        return (
            <div className="todo-list">
                {todoNoteList}
            </div>
        );
    }
});

var TodoForm = React.createClass({
    handleSubmit:function(e){
        e.preventDefault();
        var title = this.refs.title.value.trim();
        if (!title){
            return;
        }
        this.props.onTodoSubmit({title:title,date:new Date().toDateString()});
        this.refs.title.value='';
        this.setState();
        return;
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit} /*onKeyup={this.handleSubmit}*/>
                <input type="text"  placeholder="say something..." ref="title"/>
                <input type="submit" value="ADD"/>
            </form>
        );
    }
});

//
//export default class TodoApp extends React.Component {
//    render() {
//        return (
//            <div>
//                <h1>TODOList</h1>
//                <TodoList></TodoList>
//            </div>
//        )
//    }
//}
var TodoApp = React.createClass({
    handleTodoSubmit:function(todoNote){
        var todoList = this.state.data;
        this.setState({data:todoList.concat([todoNote])})
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: todoNote,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState:function(){
        return {data:data}
    },
    componentDidMount:function(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function () {
        return (
            <div className="todoApp">
                <h1>TODOList</h1>
                <TodoForm onTodoSubmit={this.handleTodoSubmit}></TodoForm>
                <TodoList data={this.state.data}></TodoList>
            </div>
        )
    }
});

export default TodoApp;