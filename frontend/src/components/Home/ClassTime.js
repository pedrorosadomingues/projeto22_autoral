import { useState, useContext } from 'react'
import { HomeContext } from '@/contexts/HomeContext'
import { w } from 'windstitch'
import { setAbsolute, setRelative } from "@/utils";
import StdName from './StudentName';

export default function ClassTime({ time, id, students, day }) {
    const { setShowModal, showModal } = useContext(HomeContext)
    const filteredStudents = students.filter((student) => student.classTimeId === id)

    function openModal() {
        setShowModal({
            ...showModal,
            yesOrNo: !showModal.yesOrNo,
        })
    }

    return (
        <ClassTimeCtn className={setRelative(showModal.registerStd)}>
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
 flex  flex-col w-full h-screen min-w-[170px] items-center justify-center bg-gray-200 w-1/6 border-2 border-black p-1 `;

const ClassTimeStl = w.h1`
 right-[100%] mr-[20px] text-red-900 font-black bg-blue-200 `;
