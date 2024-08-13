import { useState,useRef,useEffect} from 'react'
import './App.css'
import { ToDoList } from '../ToDoList/ToDoList'
import { toDoType } from '../../types'
import { Button } from '../Button/Button'
// @ts-ignore
import arrow from  '../../img/arrow.png' 

function App() {

  const [valueText, setValueText] = useState<string>("")
  const [todosList, setTodosList] = useState<toDoType[]>([])
  const [countActiveTodos,setCountActiveTodos] = useState<number>(0)
  const [countTodos,setCountToDos] = useState<number>(0)
  const [flgListOpen,setFlgListOpen] = useState<boolean>(false)
  const [filter,setFilter] = useState<string>("All")
  const inputRef:React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  const removeCompleted = () => {
    const removeList = todosList.filter((todo)=>{
      if(todo.completed === false){
        return todo
      }
    })
    setTodosList(removeList)
  }

  const toggleFinished = (id:number):void => {
    let toggledTodoList = todosList.map(todo =>{
      if(id === todo.id){
        todo.completed = !todo.completed
      }
      return todo
    })
    let countActiveList = todosList.reduce((acc,todo) =>{
      if(todo.completed === false){
        acc = acc  + 1
      }
      return acc
    },0)
    setTodosList(toggledTodoList)
    setCountActiveTodos(countActiveList)
  }

  const addTodo = ():void => {
    let count: number  = countTodos + 1
    setCountToDos(count)
    setTodosList([...todosList,{id:count,value:valueText,completed:false}])
    setValueText('')
    setCountActiveTodos(prev => prev + 1)
    inputRef.current && inputRef.current.focus()
    setFlgListOpen(true)
  }

  const handleOnKeyDown = (e:React.KeyboardEvent<HTMLInputElement>): void =>{
    if(e.key === 'Enter') {
      addTodo()
    }
  }

  const handlelChange = (e:React.ChangeEvent<HTMLInputElement>): void =>{
    setValueText(e.currentTarget.value)
  }

  return (
    <main className='mainBlock'>
      <h1 className='name'>Todos</h1>
      <div className='content'>
        <div className='input'>
          <img className={flgListOpen ? 'listOpen': 'listClose'} src={arrow} onClick={()=>{setFlgListOpen(prev=>!prev)}}></img>
          <input className='todoInputText' type='text' onKeyDown={handleOnKeyDown} onChange = {handlelChange} value={valueText} ref={inputRef} placeholder='What needs to be done?'/>
        </div>
        <footer className='footer'>
          <ToDoList flgListOpen = {flgListOpen} todos={todosList} toggleFinished = {toggleFinished} filter={filter}/>
          <div className='inform'>
            {
              <div className='countActiveTodos'>{countActiveTodos} items left</div>
            }
            <nav>
              <Button onClick={()=>{setFilter('All')}} value='All' filter={filter}></Button>
              <Button onClick={()=>{setFilter('Active')}} value='Active' filter={filter}></Button>
              <Button onClick={()=>{setFilter('Completed')}} value='Completed'filter={filter}></Button>
            </nav>
            <Button onClick={removeCompleted} value='Clear completed'></Button>
          </div>
        </footer>
        {     
          !!countTodos &&
          <div className='mainBlockIndex2'></div>
        }
        {     
          !!countTodos &&
          <div className='mainBlockIndex3'></div>
        }
      </div>
    </main>
  )
}

export default App
