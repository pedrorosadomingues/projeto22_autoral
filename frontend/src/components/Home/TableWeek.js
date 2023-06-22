import { weekdays } from "@/utils/timeUtils"
import Weekday from "./Weekday"
import { w } from 'windstitch';
import { setRelative, setHight800 } from "@/utils";
import { useContext } from 'react'
import { HomeContext } from '@/contexts/HomeContext'

export default function TableWeek() {
    const { showModal } = useContext(HomeContext)

    
    return (
        <TableWeekCtn className={`${showModal.registerStd || showModal.updateStd ? "h-[800px]" : ""}` }>
            {weekdays.map((day) => (
                <Weekday key={day.id} day={day.day} id={day.id}
                />
            ))}
        </TableWeekCtn>
    )
}

const TableWeekCtn = w.div`
flex w-4/6 items-center justify-center bg-gray-200 mb-10`;