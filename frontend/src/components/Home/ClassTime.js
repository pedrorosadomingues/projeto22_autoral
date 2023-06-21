import { useState, useContext } from 'react'
import { HomeContext } from '@/contexts/HomeContext'
import { w } from 'windstitch'
import { setAbsolute, deleteStudentById } from "@/utils";
import StdName from './StudentName';

export default function ClassTime({ time, id, students }) {
    const { setShowModal, showModal, attPage } = useContext(HomeContext)
    const filteredStudents = students.filter((student) => student.classTimeId === id)

    function openModal() {
        setShowModal({
            ...showModal,
            yesOrNo: !showModal.yesOrNo,
        })
    }

    return (
        <ClassTimeCtn>
            <ClassTimeStl className={setAbsolute(showModal.registerStd)}>{time}</ClassTimeStl>
            {filteredStudents.map((student) => (
                <StdName key={student.id} name={student.name} id={student.id}/>
            ))}
        </ClassTimeCtn>
    )
}

const ClassTimeCtn = w.div`
flex  flex-col w-full h-screen items-center justify-center bg-gray-200 w-1/6 border-2 border-black`;

const ClassTimeStl = w.h1`
 right-[85%] text-red-900 font-black bg-blue-200 `;
