import React from "react";
import s from "./counter1.module.css";
import {MyDisplay} from "../MyDisplay/MyDisplay";
import {MyButton} from "../MyButton/MyButton";


type Counter1PropsType = {
    counter: any,
    buttonInc: any,
    buttonReset: any,
    setLocalStorageValue: any,
    maxValue: number,
    startValue: number,
    isSetEnter: boolean
}
export const Counter1 = (props: Counter1PropsType) => {
    return (
        <div className={s.counter}>
            <h1>My counter</h1>
            <MyDisplay
                counter={props.counter}
                maxValue={props.maxValue}
                startValue={props.startValue}
                isSetEnter={props.isSetEnter}
            />
            <div className={s.buttons}>
                <MyButton
                    title="inc"
                    buttonInc={props.buttonInc}
                    disabled={props.counter === props.maxValue}
                    counter={props.counter}
                    maxValue={props.maxValue}
                    // active={active}
                    // type="on"
                />

                <MyButton
                    title="reset"
                    buttonReset={props.buttonReset}
                    counter={props.counter}
                    disabled={props.counter === props.startValue}
                    // disabled={counter === maxValue}
                    // active={active}
                    // type="off"
                />
                <MyButton
                    title="save"
                    setLocalStorageValue={props.setLocalStorageValue}
                    counter={props.counter}
                    // active={active}
                    // type="off"
                />
            </div>
        </div>

    )
}





