export type toDoType = {
    id:number;
    value:string;
    completed:boolean;
}

export type propsButton = {
    filter?:string,
    value:string,
    onClick:()=>void,
}


export type propsToDoList = {
    flgListOpen:boolean,
    todos:toDoType[],
    toggleFinished:(id:number)=>void,
    filter:string,
}

export type propsToDoItem = {
    todoItem:toDoType,
    toggleFinished:(id:number)=>void,
}