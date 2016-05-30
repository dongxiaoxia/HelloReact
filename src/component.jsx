import React from 'react';
import TodoApp from './component/Todo/todo.jsx';
import Header from './component/Header/header.jsx';
//export default class Hello extends React.Component{
//    render(){
//        return <h1>Hello World</h1>
//    }
//}

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <TodoApp url="/abc"></TodoApp>
            </div>
        );
    }
});
export default App;