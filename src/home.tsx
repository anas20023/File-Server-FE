/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';  

const Home: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let userCredential;
            userCredential = await signInWithEmailAndPassword(auth, username, password);
            //const token = await userCredential.user.getIdToken();
            //console.log('Login successful, token:', token);
            navigate('/dashboard');
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <>
            <section className="flex flex-col justify-center items-center bg-sky-500 h-full w-full font-[poppins]">
                <h1 className="text-4xl font-medium text-white px-10 py-10">Alpha 2.0</h1>
            </section>
            <form onSubmit={handleSubmit} method='post' className="h-80 w-80 flex flex-col justify-center items-center mx-auto mt-10 bg-slate-200 rounded p-6">
                <div className="mb-4 w-full">
                    <label htmlFor="username" className="block text-slate-900 mb-2 font-medium">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                        className="w-full p-2 rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-4 w-full">
                    <label htmlFor="pw" className="block text-slate-900 mb-2 font-medium">Password</label>
                    <input
                        type="password"
                        name="pw"
                        id="pw"
                        placeholder="password"
                        className="w-full p-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <input type="submit" value="Login" className="bg-sky-600 text-white px-4 py-2 rounded cursor-pointer" />
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
        </>
    );
};

export default Home;
