import Link from "next/link"
import { w } from "windstitch"
import { HomeContext } from '@/contexts/HomeContext'
import { useContext } from 'react'

export default function AddStudentModal() {
    const { students, setShowRegisterStudentModal, showRegisterStudentModal } = useContext(HomeContext)

    return (
        <AddStudentModalCtn>
           {
            students.length === 0 && <h1 className="text-red-900 font-black">Não há alunos cadastrados</h1>
           }
           <Button 
           onClick={() => setShowRegisterStudentModal(!showRegisterStudentModal)}
           >
            Cadastrar Aluno
           </Button>
        </AddStudentModalCtn>
    )
}

const AddStudentModalCtn = w.main`
flex w-full h-screen items-center justify-center column flex-col`;

const Button = w.button`
bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;