import Link from 'next/link';
import { useState } from 'react';
import api from '../config/server';
import { w } from "windstitch";
import { useRouter} from 'next/router';

export default function SignIn() {
    const [form, setForm] = useState({ email: '', password: '' });
    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await api.post('/sign-in', form);      
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', data.user.name);
            navigateToHome();
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };
    const router = useRouter()
    const navigateToHome = () => {
        router.push('/Home');
      };
    return (
        <SignInCtn
        >
            <Title>ClassPerformance</Title>
            <Form onSubmit={handleSubmit} >
                <Label>Email</Label>
                <Input onChange={handleChange}
                    name="email"
                    type="email"
                    value={form.email} />
                <Label>Password</Label>
                <Input onChange={handleChange}
                    name="password"
                    type="password"
                    value={form.password} />
                <Button type="submit">Sign-In</Button>
                <P>Don`t have a account? <Link href="/SignUp"><LinkStl>Sign-Up</LinkStl></Link></P>
            </Form>
        </SignInCtn>
    )
}

const Input = w.input`
  border border-gray-400 p-2 mb-4`;

const Label = w.label`
  text-left`;

const SignInCtn = w.main`
flex w-full h-screen items-center justify-center column flex-col bg-gray-200`;

const Title = w.h1`
  text-red-900 font-black`;

const Button = w.button`
bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;

const Form = w.form`
flex flex-col w-1/3`;

const P = w.p`
  text-center text-gray-500 text-sm mt-4`;

const LinkStl = w.span`
  text-blue-500 hover:text-blue-700 text-sm hover:font-bold`;