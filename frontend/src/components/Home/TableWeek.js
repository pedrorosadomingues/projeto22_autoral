import { weekDays } from "../../utils/timeUtils"
import Weekday from "./Weekday"

export default function TableWeek() {
    return (
        <>
            <div className="flex w-full h-screen items-center justify-center column flex-col">
                {weekDays.map((day) => (
                    <Weekday day={day} />
                ))}
            </div>
        </>
    )

}