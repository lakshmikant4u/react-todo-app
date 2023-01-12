import React from "react"

// class TodoItem extends React.Component {
//     render() {
//         return <li>{this.props.todoItem.title}</li>
//     }
// }

// export default TodoItem


function TodoItem(props) {
    return <li>{props.todoItem.title}</li>
}

export default TodoItem