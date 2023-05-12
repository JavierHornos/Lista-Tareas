import "./TodoItem.css"

const TodoItem = ({todo, borrarTodo}) => {
  return (
    <li className="item">
        <span> {todo} </span>
        <button onClick={ () => borrarTodo(todo)}> Eliminar </button>
    </li>
  )
}

export default TodoItem