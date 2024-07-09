import { FC } from "react";
import { propsButton } from "../../types";
import './Button.css'

export const Button:FC<propsButton> = ({value,onClick,filter}) =>{

    const handleClickButton  = ():void =>{
        onClick()
    }
    return(
        <button className={filter === value ? "activButton":"button"} onClick={handleClickButton}>
            {
                value
            }
        </button>
    )
}