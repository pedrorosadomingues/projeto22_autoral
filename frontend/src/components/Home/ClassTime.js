export default function ClassTime() {
    const [students, setStudents] = useState([])

    async function getStudentsByUserId(Auth) {
        try {
            const { data } = await api.get(`/student`, Auth)
            setStudents(data)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

}