import Link from "next/link"

export default function AddStudentModal({students }) {
    return (
        <div className="flex w-full h-screen items-center justify-center column flex-col">
            <h1 className='text-red-900 font-black'>Você não tem nenhum aluno cadastrado</h1>
            <Link href="/RegisterStudent"  className='bg-green-500 text-white font-bold py-2 px-4 rounded'>
                Cadastrar Aluno
            </Link >
        </div>
    )
}