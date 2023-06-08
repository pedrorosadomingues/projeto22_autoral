export default function SignIn() {
    return (
        <main className="flex w-full h-screen items-center justify-center column flex-col"
        >
            <h1 className='text-red-900 font-black'>ClassPerformance</h1>
            <input placeholder="email" />
            <input placeholder="senha" />
            <button>Entrar</button>
        </main>
    )
}