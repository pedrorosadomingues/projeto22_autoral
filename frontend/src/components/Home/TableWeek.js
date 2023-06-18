import { weekDays } from "../../utils/timeUtils"
import Weekday from "./Weekday"
import { w } from 'windstitch';

export default function TableWeek() {
    return (
        <TableWeekCtn>
            {weekDays.map((day) => (
                <Weekday day={day.day} id={day.id}
                />
            ))}
        </TableWeekCtn>
    )
}

const TableWeekCtn = w.div`
flex w-4/6 items-center justify-center bg-gray-200`;