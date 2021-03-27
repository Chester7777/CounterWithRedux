import React from "react";
import styles from "./MyButton.module.css"


type MyButtonType = {
    title: string
    // buttonSet?: (startValue: number) => void
    buttonSet?: any
    disabled?: boolean
    counter: number
    maxValue?: number
    startValue?: number

    buttonReset?: (startValue: number) => void
    setLocalStorageValue?: any
    buttonInc?: (counter: number) => void
    // active: ActiveType
    // type: string
}

export const MyButton = (props: MyButtonType) => {
// let changeButton = props.title === "inc" ? props.buttonInc :
//     props.title === "reset" ? props.buttonReset :
//         props.title === "save" ? props.setLocalStorageValue :
//             props.title === "set" ? props.buttonSet : null

    let callBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
       let x = e.currentTarget.title == "inc" ? props.buttonInc?.(props.counter) :
            e.currentTarget.title == "save" ? props.setLocalStorageValue() :
                e.currentTarget.title == "set" ? props.buttonSet?.(props.startValue) : null
    }
    return (
        <button title={props.title}
            className={props.counter === props.maxValue ? styles.myButtons_error : styles.myButtons}
            onClick={callBack}
            disabled={props.disabled}
        >{props.title}</button>

    )
}