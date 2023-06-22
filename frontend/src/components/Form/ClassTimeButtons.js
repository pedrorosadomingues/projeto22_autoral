import { classTimes } from "@/utils";
import { w } from "windstitch";
import { useState } from "react";

export default function ClassTimeButtons({ handleChange, classTimeId }) {
    const [ checkedState, setCheckedState ] = useState(true)

    return (
        <>
            <h1 className="mt-1">Class Time</h1>
            <ClassTimeBtnCtn>
                {classTimes.map((time) => (
                    <ClassTimeButtonsStl key={time.id}  >
                        <input className="cursor-pointer" onClick={(e) => {
                            handleChange(e)
                            setCheckedState(false)
                            }} checked={time.id === classTimeId && checkedState ? true : null} type="radio" name="classTimeId" value={time.id} />
                        <label className="cursor-pointer text-[12px]" >{time.time}</label>
                    </ClassTimeButtonsStl>
                ))}
            </ClassTimeBtnCtn>
        </>
    )
}

const ClassTimeBtnCtn = w.div` 
flex items-center justify-center bg-gray-200 w-1/6 h-1/6 gap-[40%] m-auto`;

const ClassTimeButtonsStl = w.div`
 flex flex-col items-center justify-center mt-1`;