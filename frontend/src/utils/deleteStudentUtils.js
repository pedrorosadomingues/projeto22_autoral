import api from '../config/server'

export async function deleteStudentById(id) {

    try {
        const token = localStorage.getItem('token')
        const Auth = { headers: { Authorization: `Bearer ${token}` } };
        await api.delete(`/student/${id}`, Auth)
        
       
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
}

export const modalInfo = {
    text: "Are you sure want delete",
    studentName: "studentName"
}