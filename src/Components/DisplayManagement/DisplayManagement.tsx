import React, {ChangeEvent} from "react";
import style from "../Counter1/counter1.module.css"

type DisplayManagementType = {
    maxValue: number
    startValue: number
    changeValueMax: (value: ChangeEvent<HTMLInputElement>) => void
    changeValueStart: (value: ChangeEvent<HTMLInputElement>) => void
    // setMaxValue: (value: number) => void
    // setStartValue: (value: number) => void
}

export const DisplayManagement = (props: DisplayManagementType) => {

    return (
        <div>
            <div>
                <h4> Max value :
                <input value={props.maxValue}
                       type="number"
                       className={props.maxValue <= props.startValue ? style.error_inputMax : style.inputStart}
                       onChange={props.changeValueMax}/>
                </h4>
            </div>
            <div>
                <h4> Start value:
                <input
                    value={props.startValue}
                    type="number"
                    className={props.startValue < 0 ? style.error_inputMax : style.inputStart}
                    onChange={props.changeValueStart}/>
                </h4>
            </div>
        </div>
    )
}