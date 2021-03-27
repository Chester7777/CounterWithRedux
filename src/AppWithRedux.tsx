import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./App.module.css";
import {Counter1} from "./Components/Counter1/Counter1";
import {Counter2} from "./Components/Counter2/Counter2";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "./Components/Redux/store";
import {
    ButtonIncrementAC,
    ChangeValueMaxAC, ChangeValueStartAC,
    InitialStatePropsType,
    ResetButtonAC,
    SetButtonAC, SetCounterAC, SetMaxValueAC, SetStartValueAC
} from "./Components/Redux/CounterReducer";


// export type ActiveType = "on" | "off" | null


function AppWithRedux() {

    const values: InitialStatePropsType = useSelector<AppRootStateType, InitialStatePropsType>(state => state.counter);
    const dispatch = useDispatch()


    // let [counter, setCounter] = useState<number>(0)
    // let [startValue, setStartValue] = useState<number>(0)
    // let [maxValue, setMaxValue] = useState<number>(0)
    // let [isSetEnter, setIsSetEnter] = useState<boolean>(false)


    // let [management, setManagement] = useState(0)
    // let [active, setActive] = useState<ActiveType>(null)

    const setLocalStorageValue = () => {
        // store.subscribe(() => {
            localStorage.setItem("keyValue1", JSON.stringify(values.maxValue))
            localStorage.setItem("keyValue2", JSON.stringify(values.startValue))
            localStorage.setItem("keyValue3", JSON.stringify(values.counter))
        // )}

// localStorage.setItem("keyValue", counter.toString()) //можно так
    }
    // useEffect(() => {
    //     let saveStringMax = localStorage.getItem("keyValue1")
    //     if (saveStringMax) {
    //         let saveNumberMax = JSON.parse(saveStringMax)
    //         let action = SetMaxValueAC(saveNumberMax)
    //         dispatch(action)
    //     }
    // }, [dispatch])
    // useEffect(() => {
    //     let saveStringStart = localStorage.getItem("keyValue2")
    //     if (saveStringStart) {
    //         let saveNumberStart = JSON.parse(saveStringStart)
    //         let action = SetStartValueAC(saveNumberStart)
    //         dispatch(action)
    //     }
    // }, [dispatch])
    // useEffect(() => {
    //     let saveStringCounterDisplay = localStorage.getItem("keyValue3")
    //     if (saveStringCounterDisplay) {
    //         let saveNumberDisplay = JSON.parse(saveStringCounterDisplay)
    //         let action = SetCounterAC(saveNumberDisplay)
    //         dispatch(action)
    //     }
    // }, [dispatch])

    //Redux
    let buttonInc = (counter: number) => {
        let action = ButtonIncrementAC(counter)
        dispatch(action)
    }
    // let ButtonInc = () => {
    //     let newCounter = counter + 1
    //     setCounter(newCounter)
    //     setActive("on")
    // }

    //Redux
    let buttonSet = (startValue: number,maxValue: number, isSetEnter: boolean) => {
        let action = SetButtonAC(startValue, maxValue, isSetEnter)
        dispatch(action)
    }
    // let ButtonSet = () => {
    //     setCounter(startValue)
    //     setMaxValue(maxValue)
    //     setStartValue(startValue)
    //     setIsSetEnter(true)
    // }

    //Redux
    let buttonReset = (startValue: number) => {
        let action = ResetButtonAC(startValue)
        dispatch(action)
    }

    const changeValueMax = (value: ChangeEvent<HTMLInputElement>) => {
        // props.setMaxValue(e.currentTarget.valueAsNumber)
        dispatch(ChangeValueMaxAC(value))

    }
    const changeValueStart = (value: ChangeEvent<HTMLInputElement>) => {
        // props.setStartValue(e.currentTarget.valueAsNumber)
        dispatch(ChangeValueStartAC(value))
    }
    // let ButtonReset = () => {
    //     setCounter(startValue)
    //     // setActive("off")
    // }


    //localStorage.getItem - в ручную сохранение и вывидение информации на UI
    // const getLocalStorageValue = () => {
    //     let saveString  = localStorage.getItem("keyValue")
    //     if(saveString) {
    //         let saveNumber = JSON.parse(saveString)
    //         setCounter(saveNumber)
    //     }
    // }

    // очищение LocalStorage
    // const clearLocalStorageValue = () => {
    //     localStorage.clear()
    //     setCounter(0)
    // }

    return (
        <div className={s.app}>
            <div className={s.counter2}>
                <Counter2
                    buttonSet={buttonSet}
                    counter={values.counter}
                    startValue={values.startValue}
                    maxValue={values.maxValue}
                    changeValueMax={changeValueMax}
                    changeValueStart={changeValueStart}
                    // setStartValue={setStartValue}
                    // setMaxValue={setMaxValue}
                />
            </div>
            <div className={s.counter1}>
                <Counter1
                    counter={values.counter}
                    buttonInc={buttonInc}
                    buttonReset={buttonReset}
                    setLocalStorageValue={setLocalStorageValue}
                    maxValue={values.maxValue}
                    startValue={values.startValue}
                    isSetEnter={values.isSetEnter}
                />
            </div>
        </div>
    );
}

export default AppWithRedux;

