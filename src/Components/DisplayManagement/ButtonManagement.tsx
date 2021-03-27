import React from "react";
import styles from "./MyButton.module.css"



type MyButtonType = {
    title: string
    callBack: () => void
    disabled?: number
    counter: number
    // active: ActiveType
    // type: string

}

export const MyButton = (props: MyButtonType) => {
const ClickSet = () => {

}
    return (
            <button
                className={props.counter === 5 ? styles.myButtons_error : styles.myButtons}
                onClick={props.callBack}
                disabled={props.disabled === 5}
            >{props.title}</button>

    )
}