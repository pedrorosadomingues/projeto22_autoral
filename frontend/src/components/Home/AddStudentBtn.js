import Link from "next/link"
import { w } from "windstitch"
import { HomeContext } from '@/contexts/HomeContext'
import { useContext } from 'react'

export default function AddStudentModal() {
    const { students, setShowModal, showModal } = useContext(HomeContext)

    return (
        <AddStudentModalCtn>
           
           <Button 
           onClick={() => setShowModal({ ...showModal, registerStd: !showModal.registerStd })}
           >
            Register new student
           </Button>
           {
            <h1 className="text-blue-900 font-black">You have { students.length } students</h1>
           }
        </AddStudentModalCtn>
    )
}

const AddStudentModalCtn = w.main`
flex w-full items-center justify-center column flex-col`;

const Button = w.button`
bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;