import { weekdays } from "@/utils";
import { w } from "windstitch";
import { useState } from "react";

export default function WeekdayButtons({ handleChange, weekdayId }) {
    const [ checkedState, setCheckedState ] = useState(true)

    return (
        <>
            <h1 className="mt-1">Weekday</h1>
            <WeekdayBtnCtn>
                {weekdays.map((weekday) => (
                    <WeekdayButtonsStl key={weekday.id}  >
                        <input className="cursor-pointer" onClick={(e) => {
                            handleChange(e)
                            setCheckedState(false)
<<<<<<< HEAD
                            }}  type="radio" name="weekdayId" value={weekday.id} />
=======
                            }} type="radio" name="weekdayId" value={weekday.id} />
>>>>>>> 66f21d1b9e4e995aff4f440fa769b9ec6e8ed476
                        <label className="cursor-pointer text-[12px]" >{weekday.day}</label>
                    </WeekdayButtonsStl>
                ))}
            </WeekdayBtnCtn>
        </>
    )
}

const WeekdayBtnCtn = w.div`
flex items-center justify-center bg-gray-200 w-1/6 h-1/6 gap-[20%] m-auto`;

const WeekdayButtonsStl = w.div`
 flex flex-col items-center justify-center mt-1`;
