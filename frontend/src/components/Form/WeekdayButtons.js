import { weekdays } from "@/utils";
import { w } from "windstitch";

export default function WeekdayButtons({ handleChange }) {
    return (
        <>
            <h1 className="mt-1">Weekday</h1>
            <WeekdayBtnCtn>
                {weekdays.map((weekday) => (
                    <WeekdayButtonsStl key={weekday.id}  >
                        <input className="cursor-pointer" onClick={(e) => handleChange(e)} type="radio" name="weekdayId" value={weekday.id} />
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
