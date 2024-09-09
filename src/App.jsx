import { useState } from "react"
import TodoInput from "./Component/TodoInput"
import TodoList from "./Component/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')
  

 function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return todoIndex !== index
    })
    setTodos(newTodoList)

  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }
  return (
    
    <>
      <TodoInput handleAddTodos={handleAddTodos} 
      todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos}
       handleEditTodo={handleEditTodo} />
      
    </>
  )
}

export default App
