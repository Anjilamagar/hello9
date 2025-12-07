import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert(`Login successful!\nEmail: ${email}\nRemember me: ${rememberMe}`);
            // Here you would typically make an API call to authenticate
        }, 1500);
    };

    // const handleSignUp = () => {
    //     alert('Sign up clicked! You would navigate to registration page here.');
    // };
    const handleSignUp = (e) => {
        e.preventDefault();
        const body = { email, password, rememberMe, isLoading }
        axios.post('http://localhost:3000/auth/login', body)
    }


    // const [email, setEmail] = useState('')
    // const EmailChange = (event) => {
    //     setEmail(event.target.value)

    //     console.log(name)
    // }

    // const [password, setPassword] = useState('')
    // const passowrdChange = (event) => {
    //     setPassword(event.target.value)
    // }

    return (
        <div>
            <div className="bg-white flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center space-y-4">
                    <div>
                        <img
                            src="https://placehold.co/80x50/a855f7/white?text=LOGO"
                            alt="Logo"
                            className="w-20 h-50"
                            style={{ filter: 'drop-shadow(0 0 25px #a855f7)' }}
                        />
                    </div>

                    <h1
                        className="text-4xl text-center font-bold mb-2 text-black"
                        style={{ textShadow: '0 0 20px #a855f7' }}
                    >
                        Welcome Back
                    </h1>

                    <div className="bg-[#16213e] border border-[#6b21a8] rounded-2xl w-96 p-8"
                        style={{ boxShadow: '0 20px 25px -5px rgba(107, 33, 168, 0.4), 0 8px 10px -6px rgba(107, 33, 168, 0.4)' }}>
                        <h1
                            className="text-2xl font-bold text-center text-purple-200 mb-2"
                            style={{ textShadow: '0 0 10px #a855f7' }}
                        >
                            Login
                        </h1>

                        <div className="space-y-5">
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-purple-200 font-medium mb-1" onChange={EmailChange} value={email} name='email'>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleLogin(e)}
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-2 border border-[#a855f7] bg-[#1a1a2e] text-white rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-purple-200 font-medium mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleLogin(e)}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2 border border-[#a855f7] bg-[#1a1a2e] text-white rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#a855f7]"
                                />
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between text-purple-200">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="w-4 h-4 text-[#a855f7] accent-[#a855f7] cursor-pointer"
                                    />
                                    <span>Remember me</span>
                                </label>
                                <button
                                    type="button"
                                    onClick={() => alert('Forgot password clicked!')}
                                    className="hover:underline text-purple-200 text-sm"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            {/* Login Button */}
                            <button
                                onClick={handleLogin}
                                disabled={isLoading}
                                className="w-full bg-[#a855f7] hover:bg-[#c084fc] text-white py-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ boxShadow: '0 10px 15px -3px rgba(168, 85, 247, 0.4)' }}
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center my-4">
                            <hr className="flex-1 border-gray-700" />
                            <span className="mx-2 text-gray-300">or</span>
                            <hr className="flex-1 border-gray-700" />
                        </div>

                        {/* Sign Up Button */}
                        <button
                            onClick={handleSignUp}
                            className="w-full border border-[#a855f7] text-white py-2 rounded-lg hover:bg-[#a855f7]/20 transition-all"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
