import React from "react";
import style from "./MyDisplay.module.css"

type MyDisplayType = {
    counter: number
    maxValue: number
    startValue: number
    isSetEnter: boolean
}

export const MyDisplay = (props: MyDisplayType) => {

    let wordError = <h6 className={style.word_error}>Incorrect <br/> value!</h6>

    return (
        <div className={style.myDisplay}>
            <span className={props.counter === props.maxValue ? style.my_number_error : style.my_number}>

                {
                    props.isSetEnter
                        ? props.maxValue <= props.startValue || props.startValue < 0
                        ? wordError
                        : props.counter
                        : "enter 'set'"
                }
            </span>
        </div>
    )
}