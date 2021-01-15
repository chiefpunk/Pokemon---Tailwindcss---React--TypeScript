import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

interface IFormInputs {
    email: string
    password: string
}

interface Props {
    setIsLoggedIn:(isLoggedIn: boolean) => void
}
const LoginPage = ({setIsLoggedIn}: Props) => {
    const { register, errors, handleSubmit } = useForm<IFormInputs>();
    const [status, setStatus] = React.useState(true);
    const credentials = {email: "admin@admin.com", password:"admin"}
    const history = useHistory();
    const onSubmit = (data : IFormInputs) => {
        if(data.email === credentials.email && data.password === credentials.password){
            setIsLoggedIn(true)
            setStatus(true);
            history.push('/pokemon');
        }
        else{
            setStatus(false);
        }
    }
    return (
        <div className="h-screen font-sans bg-gray-100 bg-cover">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form className="max-w-md m-9 p-12 bg-gray-200 rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mt-6">
                                <input className="w-full px-5 py-2 text-white bg-gray-300 rounded border border-transparent focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:border-transparent focus:bg-gray-300"
                                type="email" id="email" placeholder="Email" aria-label="email" name="email" ref={register({ required: true})} />
                                <label className="text-red-600">{errors.email && "Email is required"}</label>
                            </div>

                            <div className="mt-6">
                                <input className="w-full px-5 py-2 text-white bg-gray-300 rounded border border-transparent focus:outline-none focus:ring-1 focus:ring-yellow-300 focus:border-transparent focus:bg-gray-300"
                                    name="password" type="password" id="password" placeholder="Password" arial-label="password" ref={register({ required: true})} />
                                <label className="text-red-600">{errors.password && "Password is required"}</label>
                            </div>
                            <label className="text-red-600">{status === false ? "Login Success" : "Incorrect email or password"}</label>
                            <div className="mt-8 mb-6 items-center flex justify-between max-w-full">
                                <button className="w-full px-4 py-3 text-white font-bold tracking-wider bg-yellow-300 hover:bg-yellow-300 rounded"
                                    type="submit">LOGIN</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;