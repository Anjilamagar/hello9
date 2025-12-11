// import React, { useState } from "react";

// const RegistrationForm = () => {
//     const [formData, setFormData] = useState({
//         fullname: "",
//         email: "",
//         password: "",
//         phone: "",
//     });

//     const [isDarkMode, setIsDarkMode] = useState(true);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(
//             `Registration Data:\nFull Name: ${formData.fullname}\nEmail: ${formData.email}\nPassword: ${formData.password}\nPhone: ${formData.phone}`
//         );
//     };

//     const toggleTheme = () => setIsDarkMode(!isDarkMode);

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

//                 <div
//                     className={` flow items-center justify-center min-h-screen p-4 transition-all duration-500 ${isDarkMode
//                         ? "bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]"
//                         : "bg-gradient-to-br from-purple-50 via-white to-indigo-50"
//                         }`}
//                 >
//                     {/* Theme Toggle Button */}
//                     <button
//                         onClick={toggleTheme}
//                         className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 ${isDarkMode
//                             ? "bg-white/10 hover:bg-white/20 text-[#A886F7]"
//                             : "bg-[#7C5FDC]/10 hover:bg-[#7C5FDC]/20 text-[#6B46C1]"
//                             }`}
//                     >
//                         {isDarkMode ? "☀️" : "🌙"}
//                     </button>

//                     {/* Registration Card */}
//                     <form
//                         onSubmit={handleSubmit}
//                         className={`rounded-2xl shadow-2xl p-8 max-w-md w-full backdrop-blur-sm transition-all duration-500 ${isDarkMode
//                             ? "bg-[#1A1A2E]/80 border border-[#A886F7]/20"
//                             : "bg-white/90 border border-[#A78BFA]/30"
//                             }`}
//                     >
//                         <h2
//                             className={`text-3xl font-bold mb-6 text-center ${isDarkMode ? "text-[#A886F7]" : "text-[#6B46C1]"
//                                 }`}
//                         >
//                             Create Account
//                         </h2>

//                         {/* Full Name */}
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="fullname"
//                                 className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-[#E0E0E0]" : "text-gray-700"
//                                     }`}
//                             >
//                                 Full Name
//                             </label>
//                             <input
//                                 type="text"
//                                 id="fullname"
//                                 name="fullname"
//                                 value={formData.fullname}
//                                 onChange={handleChange}
//                                 placeholder="John Doe"
//                                 className={`w-full px-4 py-2 rounded-xl outline-none transition-all duration-300 ${isDarkMode
//                                     ? "bg-[#0A0A0E]/50 border border-[#A886F7]/30 text-[#E0E0E0] placeholder-gray-500 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/50 hover:border-[#A886F7]/50"
//                                     : "bg-purple-50/50 border border-[#A78BFA]/40 text-gray-800 placeholder-gray-400 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/30 hover:border-[#A78BFA]/60"
//                                     }`}
//                             />
//                         </div>

//                         {/* Email */}
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="email"
//                                 className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-[#E0E0E0]" : "text-gray-700"
//                                     }`}
//                             >
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 placeholder="john@example.com"
//                                 className={`w-full px-4 py-2 rounded-xl outline-none transition-all duration-300 ${isDarkMode
//                                     ? "bg-[#0A0A0E]/50 border border-[#A886F7]/30 text-[#E0E0E0] placeholder-gray-500 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/50 hover:border-[#A886F7]/50"
//                                     : "bg-purple-50/50 border border-[#A78BFA]/40 text-gray-800 placeholder-gray-400 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/30 hover:border-[#A78BFA]/60"
//                                     }`}
//                             />
//                         </div>

//                         {/* Password */}
//                         <div className="mb-4">
//                             <label
//                                 htmlFor="password"
//                                 className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-[#E0E0E0]" : "text-gray-700"
//                                     }`}
//                             >
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 placeholder="••••••••"
//                                 className={`w-full px-4 py-2 rounded-xl outline-none transition-all duration-300 ${isDarkMode
//                                     ? "bg-[#0A0A0E]/50 border border-[#A886F7]/30 text-[#E0E0E0] placeholder-gray-500 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/50 hover:border-[#A886F7]/50"
//                                     : "bg-purple-50/50 border border-[#A78BFA]/40 text-gray-800 placeholder-gray-400 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/30 hover:border-[#A78BFA]/60"
//                                     }`}
//                             />
//                         </div>

//                         {/* Phone */}
//                         <div className="mb-6">
//                             <label
//                                 htmlFor="phone"
//                                 className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-[#E0E0E0]" : "text-gray-700"
//                                     }`}
//                             >
//                                 Phone Number
//                             </label>
//                             <input
//                                 type="tel"
//                                 id="phone"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 placeholder="1234567890"
//                                 className={`w-full px-4 py-2 rounded-xl outline-none transition-all duration-300 ${isDarkMode
//                                     ? "bg-[#0A0A0E]/50 border border-[#A886F7]/30 text-[#E0E0E0] placeholder-gray-500 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/50 hover:border-[#A886F7]/50"
//                                     : "bg-purple-50/50 border border-[#A78BFA]/40 text-gray-800 placeholder-gray-400 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/30 hover:border-[#A78BFA]/60"
//                                     }`}
//                             />
//                         </div>

//                         {/* Register Button */}
//                         <button
//                             type="submit"
//                             className={`w-full py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] ${isDarkMode
//                                 ? "bg-[#7C5FDC] hover:bg-[#A886F7] text-white shadow-lg shadow-[#6C40C5]/50 hover:shadow-[#A886F7]/70"
//                                 : "bg-[#7C5FDC] hover:bg-[#6B46C1] text-white shadow-lg shadow-[#7C5FDC]/50 hover:shadow-[#7C5FDC]/70"
//                                 }`}
//                         >
//                             Register
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default RegistrationForm;

import { useState } from 'react';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullname.trim()) {
            newErrors.fullname = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
            newErrors.phone = 'Phone number must be 10 digits';
        }

        return newErrors;
    };

    const handleSubmit = () => {
        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            console.log('Form submitted:', formData);
        } else {
            setErrors(newErrors);
        }
    };

    const handleReset = () => {
        setFormData({
            fullname: '',
            email: '',
            password: '',
            phone: ''
        });
        setErrors({});
        setSubmitted(false);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    if (submitted) {
        return (
            <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-500 ${isDarkMode
                    ? 'bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]'
                    : 'bg-gradient-to-br from-purple-50 via-white to-indigo-50'
                }`}>
                <button
                    onClick={toggleTheme}
                    className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 ${isDarkMode
                            ? 'bg-white/10 hover:bg-white/20 text-[#A886F7]'
                            : 'bg-[#7C5FDC]/10 hover:bg-[#7C5FDC]/20 text-[#6B46C1]'
                        }`}
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>

                <div className={`rounded-2xl shadow-2xl p-8 max-w-md w-full text-center backdrop-blur-sm transition-all duration-500 ${isDarkMode
                        ? 'bg-[#1A1A2E]/80 border border-[#A886F7]/20'
                        : 'bg-white/90 border border-[#A78BFA]/30'
                    }`}>
                    <div className="mb-6">
                        <div className={`mx-auto h-20 w-20 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-[#6C40C5]/20' : 'bg-[#A78BFA]/20'
                            }`}>
                            <svg className={`h-12 w-12 ${isDarkMode ? 'text-[#A886F7]' : 'text-[#7C5FDC]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <h2 className={`text-3xl font-bold mb-3 ${isDarkMode ? 'text-[#A886F7]' : 'text-[#6B46C1]'}`}>
                        Registration Successful!
                    </h2>
                    <p className={`mb-8 ${isDarkMode ? 'text-[#E0E0E0]' : 'text-gray-600'}`}>
                        Welcome, {formData.fullname}!
                    </p>
                    <button
                        onClick={handleReset}
                        className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${isDarkMode
                                ? 'bg-[#6C40C5] hover:bg-[#7C5FDC] text-white shadow-lg shadow-[#6C40C5]/50 hover:shadow-[#A886F7]/70'
                                : 'bg-[#7C5FDC] hover:bg-[#6B46C1] text-white shadow-lg shadow-[#7C5FDC]/50 hover:shadow-[#7C5FDC]/70'
                            }`}
                    >
                        Register Another User
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-500 ${isDarkMode
                ? 'bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]'
                : 'bg-gradient-to-br from-purple-50 via-white to-indigo-50'
            }`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button
                onClick={toggleTheme}
                className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 ${isDarkMode
                        ? 'bg-white/10 hover:bg-white/20 text-[#A886F7]'
                        : 'bg-[#7C5FDC]/10 hover:bg-[#7C5FDC]/20 text-[#6B46C1]'
                    }`}
            >
                {isDarkMode ? '☀️' : '🌙'}
            </button>

            <div className={`rounded-2xl shadow-2xl p-8 max-w-md w-full backdrop-blur-sm transition-all duration-500 my-auto ${isDarkMode
                    ? 'bg-[#1A1A2E]/80 border border-[#A886F7]/20'
                    : 'bg-white/90 border border-[#A78BFA]/30'
                }`}>
                <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-[#A886F7]' : 'text-[#6B46C1]'}`}>
                    Create Account
                </h2>

                <div className="space-y-5">
                    {/* Full Name Field */}
                    <div>
                        <label htmlFor="fullname" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-[#E0E0E0]' : 'text-gray-700'}`}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 ${errors.fullname
                                    ? 'border-2 border-red-500'
                                    : isDarkMode
                                        ? 'bg-[#0A0A0E]/50 border border-[#A886F7]/30 text-[#E0E0E0] placeholder-gray-500 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/50 hover:border-[#A886F7]/50'
                                        : 'bg-purple-50/50 border border-[#A78BFA]/40 text-gray-800 placeholder-gray-400 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/30 hover:border-[#A78BFA]/60'
                                }`}
                            placeholder="John Doe"
                        />
                        {errors.fullname && (
                            <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-[#E0E0E0]' : 'text-gray-700'}`}>
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 ${errors.email
                                    ? 'border-2 border-red-500'
                                    : isDarkMode
                                        ? 'bg-[#0A0A0E]/50 border border-[#A886F7]/30 text-[#E0E0E0] placeholder-gray-500 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/50 hover:border-[#A886F7]/50'
                                        : 'bg-purple-50/50 border border-[#A78BFA]/40 text-gray-800 placeholder-gray-400 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/30 hover:border-[#A78BFA]/60'
                                }`}
                            placeholder="john@example.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-[#E0E0E0]' : 'text-gray-700'}`}>
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 ${errors.password
                                    ? 'border-2 border-red-500'
                                    : isDarkMode
                                        ? 'bg-[#0A0A0E]/50 border border-[#A886F7]/30 text-[#E0E0E0] placeholder-gray-500 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/50 hover:border-[#A886F7]/50'
                                        : 'bg-purple-50/50 border border-[#A78BFA]/40 text-gray-800 placeholder-gray-400 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/30 hover:border-[#A78BFA]/60'
                                }`}
                            placeholder="••••••••"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-[#E0E0E0]' : 'text-gray-700'}`}>
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 ${errors.phone
                                    ? 'border-2 border-red-500'
                                    : isDarkMode
                                        ? 'bg-[#0A0A0E]/50 border border-[#A886F7]/30 text-[#E0E0E0] placeholder-gray-500 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/50 hover:border-[#A886F7]/50'
                                        : 'bg-purple-50/50 border border-[#A78BFA]/40 text-gray-800 placeholder-gray-400 focus:border-[#7C5FDC] focus:shadow-lg focus:shadow-[#7C5FDC]/30 hover:border-[#A78BFA]/60'
                                }`}
                            placeholder="1234567890"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        className={`w-full py-3.5 px-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] mt-2 ${isDarkMode
                                ? 'bg-[#7C5FDC] hover:bg-[#A886F7] text-white shadow-lg shadow-purple-500/60 hover:shadow-purple-400/80 hover:shadow-2xl'
                                : 'bg-[#7C5FDC] hover:bg-[#6B46C1] text-white shadow-lg shadow-purple-500/60 hover:shadow-purple-600/80 hover:shadow-2xl'
                            }`}
                    >
                        Register
                    </button>
                </div>

                <p className={`text-center text-sm mt-6 ${isDarkMode ? 'text-[#E0E0E0]/70' : 'text-gray-600'}`}>
                    Already have an account?{' '}
                    <a href="#" className={`font-medium transition-colors ${isDarkMode
                            ? 'text-[#A886F7] hover:text-[#7C5FDC]'
                            : 'text-[#7C5FDC] hover:text-[#6B46C1]'
                        }`}>
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}
