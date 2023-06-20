import api from '../config/server';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import AddStudentModal from '../components/Home/AddStudentModal';
import { HomeContext } from '@/contexts/HomeContext';
import TableWeek from '@/components/Home/TableWeek';
import { w } from 'windstitch';
import RegisterStudentModal from '@/components/Home/RegisterStudentModal';
import { data } from 'autoprefixer';

export default function Home() {
    const [students, setStudents] = useState([])
    const [showRegisterStudentModal, setShowRegisterStudentModal] = useState(false)
    const [handleEffect, setHandleEffect] = useState(false)

    async function getStudentsByUserId(Auth) {
        try {
            const { data } = await api.get(`/student`, Auth)
            setStudents(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) window.location.href = '/'

        const Auth = { headers: { Authorization: `Bearer ${token}` } };
        const { id } = jwt.decode(token)

        getStudentsByUserId(Auth)
    }, [showRegisterStudentModal, handleEffect])

    return (
        <HomeContext.Provider value={{
            students,
            showRegisterStudentModal,
            setShowRegisterStudentModal,
            handleEffect,
            setHandleEffect
        }} >

            <HomeCtn >
                {
                 data.name ? <h1>{dat.name}</h1> : <h1>Carregando...</h1>
                }
                <Title>ClassPerformance</Title>
                <AddStudentModal />
           
            {
                showRegisterStudentModal && <RegisterStudentModal />
            }
                <TableWeek />

            </HomeCtn>
          
        </HomeContext.Provider>
    )
}


const HomeCtn = w.main`
flex w-full h-[100%] items-center  column flex-col bg-gray-200 justify-start`;

const Title = w.h1`
text-4xl font-bold text-center text-green-800 p-10 mb-10`;
