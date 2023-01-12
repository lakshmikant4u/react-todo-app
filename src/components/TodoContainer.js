import React from "react"
import TodosList from "./TodosList"
import Header from "./Header";
class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };
    render() {
        return (
            // <div>
            //     <h1>Hello from Create React App</h1>
            //     <p>I am in a React Component!</p>
            // </div>

            // <React.Fragment>
            //     <h1>Hello from Create React App</h1>
            //     <p>I am in a React Component!</p>
            // </React.Fragment>
            // <ul>
            //     {this.obj.todos.map(todo => (
            //         <li key={todo.id}>{todo.title}</li>
            //     ))}
            // </ul>
            <React.Fragment>
                <Header />
                <TodosList todos={this.state.todos} />
            </React.Fragment>

        )
    }
}
export default TodoContainer