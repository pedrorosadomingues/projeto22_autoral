import { useState, useContext, useEffect } from 'react'
import { HomeContext } from '@/contexts/HomeContext'
import { w } from 'windstitch'
import { setAbsolute, setRelative } from "@/utils";
import StdName from './StudentName';

export default function ClassTime({ time, id, students, day }) {
    const { setShowModal, showModal } = useContext(HomeContext)
    const filteredStudents = students.filter((student) => student.classTimeId === id)
 
    return (
        <ClassTimeCtn className={!showModal.registerStd  && !showModal.updateStd ? `relative ${filteredStudents.length === 0 && "bg-gray-800"}` : ""}>
            {
                day === 'Mon' && <ClassTimeStl className={setAbsolute(showModal.registerStd)}>{time}</ClassTimeStl>
            }
            {filteredStudents.map((student) => (
                <StdName key={student.id} student={student} />
            ))}
        </ClassTimeCtn>
    )
}

const ClassTimeCtn = w.div`
flex  flex-col w-full h-screen min-w-[170px] items-center justify-center bg-gray-300 w-1/6 border-2 border-black p-1 rounded`;

const ClassTimeStl = w.h1`
 right-[100%] mr-[20px] text-red-900 font-black`;
