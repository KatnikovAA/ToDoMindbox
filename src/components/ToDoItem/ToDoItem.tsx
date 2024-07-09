import { FC } from "react"
import { propsToDoItem } from "../../types"
import './ToDoItem.css'

export const ToDoItem:FC<propsToDoItem> = ({todoItem,toggleFinished}) =>{


    return(
        <div className="todoItem">
            <input className="checkbox" type="checkbox" checked={todoItem.completed} onChange={() => toggleFinished(todoItem.id)}/>
            <div className={todoItem.completed ? "todoItemCompleted" : "todoItemActive"}>{todoItem.value}</div>
        </div>
    )
}