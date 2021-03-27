import React, {ChangeEvent} from "react";
import s from "./counter2.module.css";
import {DisplayManagement} from "../DisplayManagement/DisplayManagement";
import {MyButton} from "../MyButton/MyButton";


type PropsType = {
    // buttonSet: (startValue: number) => void
    buttonSet: any
    counter: number
    startValue: number
    maxValue: number
    changeValueMax: (value: ChangeEvent<HTMLInputElement>) => void
    changeValueStart: (value: ChangeEvent<HTMLInputElement>) => void
    // setMaxValue: (value: number) => void
    // setStartValue: (value: number) => void
}

export const Counter2 = (props: PropsType) => {
    return (
        <div className={s.counter}>

            <div className={""}>
                <DisplayManagement
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    changeValueMax={props.changeValueMax}
                    changeValueStart={props.changeValueStart}
                    // setStartValue={props.setStartValue}
                    // setMaxValue={props.setMaxValue}
                />

                <div className={s.buttonsBlock}>
                    <MyButton
                        title="set"
                        buttonSet={props.buttonSet}
                        disabled={props.startValue < 0 || props.maxValue <= props.startValue}
                        counter={props.counter}
                        maxValue={props.maxValue}
                        startValue={props.startValue}
                        // active={active}
                        // type="on"
                    />

                </div>

            </div>
        </div>

    )
}





