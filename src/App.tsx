import React, {useEffect, useState} from "react";
import s from "./App.module.css";
import {Counter1} from "./Components/Counter1/Counter1";
import {Counter2} from "./Components/Counter2/Counter2";


// export type ActiveType = "on" | "off" | null


function App() {

    let [counter, setCounter] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [isSetEnter, setIsSetEnter] = useState<boolean>(false)


    // let [management, setManagement] = useState(0)
    // let [active, setActive] = useState<ActiveType>(null)

    const setLocalStorageValue = () => {
        localStorage.setItem("keyValue1", JSON.stringify(maxValue))
        localStorage.setItem("keyValue2", JSON.stringify(startValue))
        localStorage.setItem("keyValue3", JSON.stringify(counter))
        // localStorage.setItem("keyValue", counter.toString()) //можно так
    }
    useEffect(() => {
        let saveStringMax = localStorage.getItem("keyValue1")
        if (saveStringMax) {
            let saveNumberMax = JSON.parse(saveStringMax)
            setMaxValue(saveNumberMax)
        }
    }, [setMaxValue])
    useEffect(() => {
        let saveStringStart = localStorage.getItem("keyValue2")
        if (saveStringStart) {
            let saveNumberStart = JSON.parse(saveStringStart)
            setStartValue(saveNumberStart)
        }
    }, [setStartValue])
    useEffect(() => {
        let saveStringCounterDisplay = localStorage.getItem("keyValue3")
        if (saveStringCounterDisplay) {
            let saveNumberDisplay = JSON.parse(saveStringCounterDisplay)
            setCounter(saveNumberDisplay)
        }
    }, [setCounter])

    let buttonInc = () => {
        let newCounter = counter + 1
        setCounter(newCounter)
        // setActive("on")
    }

    let buttonSet = () => {
        setCounter(startValue)
        setMaxValue(maxValue)
        setStartValue(startValue)
        setIsSetEnter(true)

    }

    let buttonReset = () => {
        setCounter(startValue)
        // setActive("off")
    }


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
                {/*<Counter2*/}
                {/*    buttonSet={buttonSet}*/}
                {/*    counter={counter}*/}
                {/*    startValue={startValue}*/}
                {/*    maxValue={maxValue}*/}
                {/*    setStartValue={setStartValue}*/}
                {/*    setMaxValue={setMaxValue}*/}
                {/*/>*/}
            </div>
            <div className={s.counter1}>
                <Counter1
                    counter={counter}
                    buttonInc={buttonInc}
                    buttonReset={buttonReset}
                    setLocalStorageValue={setLocalStorageValue}
                    maxValue={maxValue}
                    startValue={startValue}
                    isSetEnter={isSetEnter}
                />
            </div>
        </div>
    );
}

export default App;

