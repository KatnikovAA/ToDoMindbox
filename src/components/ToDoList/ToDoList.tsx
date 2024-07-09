import { FC } from "react"
import { ToDoItem } from "../ToDoItem/ToDoItem"
import { propsToDoList } from "../../types"
import './ToDoList.css'

export const ToDoList:FC<propsToDoList> = ({todos,toggleFinished,filter,flgListOpen}) =>{

    const filteredTodos = todos.filter(todo => {
        if (filter === "All") {
          return true;
        } else if (filter === "Active") {
          return !todo.completed;
        } else if (filter === "Completed") {
          return todo.completed;
        }
        return true;
      });

    return(
        <div className={flgListOpen ? "todoListOpen" : "todoListClose"}>
            {
                filteredTodos.map((todo)=>{
                        return <ToDoItem key={todo.id} todoItem={todo} toggleFinished = {toggleFinished}></ToDoItem>
                })
            }
        </div>
    )
}