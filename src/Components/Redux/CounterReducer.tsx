import React, {ChangeEvent} from "react";

const INCREMENT = "INCREMENT"
const SET_BUTTON = "SET_BUTTON"
const RESET_BUTTON = "RESET_BUTTON"
const CHANGE_VALUE_MAX = "CHANGE_VALUE_MAX"
const CHANGE_VALUE_START = "CHANGE_VALUE_START"
const SET_MAX_VALUE = "SET_MAX_VALUE"
const SET_START_VALUE = "SET_START_VALUE"
const SET_COUNTER = "SET_COUNTER"

export type ActionPropsType =
    ButtonIncrementACType |
    SetButtonACType |
    ResetButtonACType |
    ChangeValueMaxACType |
    ChangeValueStartACType |
    SetMaxValueACType |
    SetStartValueACType |
    SetCounterACType

export type InitialStatePropsType = {
    value: number
    counter: number
    startValue: number
    maxValue: number
    isSetEnter: boolean
}
const initialState: InitialStatePropsType = {
    value: 0,
    counter: 0,
    startValue: 0,
    maxValue: 1,
    isSetEnter: false
}

export function CounterReducer (state = initialState, action: ActionPropsType): InitialStatePropsType {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case SET_BUTTON:
            return {
                ...state,
                startValue: action.startValue,
                maxValue: state.maxValue,
                isSetEnter: true
            }
        case RESET_BUTTON:
            return {
                ...state,
                startValue: action.startValue
            }
        case CHANGE_VALUE_MAX:

            return {
                ...state,
                maxValue: action.value
            }
        case CHANGE_VALUE_START:
            return {
                ...state,
                startValue: action.value
            }
        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue
            }
            case SET_START_VALUE:
            return {
                ...state,
                startValue: action.startValue
            }
        case SET_COUNTER:
            return {
                ...state,
                counter: action.counter
            }


        default:
            return state
    }
}


export let ButtonIncrementAC = (counter: number): ButtonIncrementACType => {
    return {type: "INCREMENT", counter} as const
};
export let SetButtonAC = (startValue: number,maxValue: number, isSetEnter: boolean): SetButtonACType => {
    return {type: "SET_BUTTON", startValue, maxValue, isSetEnter} as const
}
export let ResetButtonAC = (startValue: number): ResetButtonACType => {
    return {type: "RESET_BUTTON", startValue} as const
}
export let ChangeValueMaxAC = (e: ChangeEvent<HTMLInputElement>): ChangeValueMaxACType => {
    return {type: "CHANGE_VALUE_MAX", value: +e.currentTarget.valueAsNumber} as const
}
export let ChangeValueStartAC = (e: ChangeEvent<HTMLInputElement>): ChangeValueStartACType => {
    return {type: "CHANGE_VALUE_START", value: +e.currentTarget.valueAsNumber} as const
}
export let SetMaxValueAC = (maxValue: number) => {
    return {type: "SET_MAX_VALUE", maxValue}
}
export let SetStartValueAC = (startValue: number) => {
    return {type: "SET_START_VALUE", startValue}
}
export let SetCounterAC = (counter: number) => {
    return {type: "SET_COUNTER", counter}
}

export type ButtonIncrementACType = {type: "INCREMENT", counter: number};
export type SetButtonACType = {type: "SET_BUTTON", startValue: number,maxValue: number, isSetEnter: boolean};
export type ResetButtonACType = {type: "RESET_BUTTON", startValue: number};
export type ChangeValueMaxACType = {type: "CHANGE_VALUE_MAX", value: number};
export type ChangeValueStartACType = {type: "CHANGE_VALUE_START", value: number};
export type SetMaxValueACType = {type: "SET_MAX_VALUE", maxValue: number};
export type SetStartValueACType = {type: "SET_START_VALUE", startValue: number};
export type SetCounterACType = {type: "SET_COUNTER", counter: number};