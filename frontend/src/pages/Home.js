import api from '../config/server';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import AddStudentModal from '../components/Home/AddStudentModal';
import { HomeContext } from '@/contexts/HomeContext';
import TableWeek from '@/components/Home/TableWeek';
import { w } from 'windstitch';
import RegisterStudentModal from '@/components/Home/RegisterStudentModal';

export default function Home() {
    const [students, setStudents] = useState([])
    const [showRegisterStudentModal, setShowRegisterStudentModal] = useState(false)

    async function getStudentsByUserId(Auth) {
        try {
            const { data } = await api.get(`/student`, Auth)
            setStudents(data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) window.location.href = '/'

        const Auth = { headers: { Authorization: `Bearer ${token}` } };

        getStudentsByUserId(Auth)
    }, [showRegisterStudentModal])

    return (
        <HomeContext.Provider value={{
            students,
            showRegisterStudentModal,
            setShowRegisterStudentModal
        }} >

            <HomeCtn>
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
flex w-full h-screen items-center justify-center column flex-col bg-gray-200`;

const Title = w.h1`
text-4xl font-bold text-center text-green-800 mt-60 mb-10`;
