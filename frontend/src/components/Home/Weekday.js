import { w } from "windstitch";
import { classTimes } from "../../utils/timeUtils";
import ClassTime from "./ClassTime";

export default function Weekday({day}) {
    return (
        <>
            <h1 className='text-red-900 font-black'>{day}</h1>
            {
                classTimes.map((time) => (
                    <ClassTime time={time} />
                ))
            }
        </>
    )
}