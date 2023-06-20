import api from '../config/server'

export async function deleteStudentById(id, attPage) {

    try {
        const token = localStorage.getItem('token')
        const Auth = { headers: { Authorization: `Bearer ${token}` } };
        await api.delete(`/student/${id}`, Auth)
        attPage()
       
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
}       