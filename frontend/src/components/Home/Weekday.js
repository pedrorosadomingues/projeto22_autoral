import { w } from "windstitch";
import { classTimes } from "@/utils";
import ClassTime from "./ClassTime";
import { useContext } from 'react'
import { HomeContext } from '@/contexts/HomeContext'

export default function Weekday({ day, id }) {
    const { students } = useContext(HomeContext)
    const filteredStudents = students.filter((student) => student.weekdayId === id)
    return (
        <WeekdayStl>

            <h1 className='text-red-900 font-black text-center'>{day}</h1>
            <WeekdayCtn>
                {
                    classTimes.map((time) => (
                        <ClassTime time={time.time} id={time.id} students={filteredStudents} />
                    ))
                }
            </WeekdayCtn>
        </WeekdayStl>
    )
}

const WeekdayStl = w.div`
flex flex-col w-3/4 h-screen items-init justify-center bg-gray-200 min-w-150 h-1/6 border-2 border-black mt-10 `;

const WeekdayCtn = w.div`
flex h-screen items-init justify-center column flex-col `;