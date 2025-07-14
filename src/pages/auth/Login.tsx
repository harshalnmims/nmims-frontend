import React from "react";

const Login: React.FC = () => {
    return (
    //     <div style={{ padding: '20px', fontSize: '24px' }}>
    //         Login Page Done gege jyrhrhry
    //     </div>
    // );
    <div className="min-h-screen flex">
        <div className="hidden lg:flex lg:w-1/2 bg-edu-blue relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10 flex flex-col justify-center px-12 py-12 text-white">
                <div className="animate-slide-in">
                    <div className="mb-8">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold mb-2">NMIMS/SVKM</h1>
                        <p className="text-blue-100 text-lg">Learning Management System</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Welcome to Your Learning Journey</h2>
                        <p className="text-blue-100 text-lg leading-relaxed">
                            Access your courses, assignments, grades, and connect with your academic community.
                            Experience seamless learning with our comprehensive educational platform.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <span className="text-blue-100">Access Course Materials</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <span className="text-blue-100">Submit Assignments</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <span className="text-blue-100">Connect with Peers</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <span className="text-blue-100">Track Progress</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="lg:hidden text-center mb-8">
                    <div className="mx-auto w-16 h-16 bg-edu-blue rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">NMIMS/SVKM</h2>
                </div>

                <div className="animate-fade-in">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">NMIMS/SVKM Portal</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Sign in to access your academic dashboard
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow-lg rounded-lg border border-gray-200">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
                                SAP Id
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="studentId"
                                    name="studentId"
                                    type="text"
                                    required
                                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-edu-blue transition-colors"
                                    placeholder="Enter your Student ID or Email"
                                    defaultValue="student123@university.edu"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-edu-blue transition-colors"
                                    placeholder="Enter your password"
                                    defaultValue="EduPass123"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    // onClick={togglePassword} // Implement togglePassword as a React handler if needed
                                >
                                    <svg id="eye-icon" className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-edu-blue focus:ring-edu-blue border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-edu-blue hover:text-edu-navy transition-colors">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        {/* Sign In Button */}
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-edu-blue hover:bg-edu-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-edu-blue transition-colors duration-200"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-edu-light-blue group-hover:text-blue-300" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                </span>
                                Sign In to Portal
                            </button>
                        </div>
                    </form>

                    {/* Additional Links */}
                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <div className="text-center space-y-2">
                            <p className="text-sm text-gray-600">
                                Need help accessing your account?
                            </p>
                            <div className="flex justify-center space-x-4 text-sm">
                                <a href="#" className="text-edu-blue hover:text-edu-navy font-medium">IT Support</a>
                                <span className="text-gray-300">|</span>
                                <a href="#" className="text-edu-blue hover:text-edu-navy font-medium">Portal Services</a>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center text-xs text-gray-500">
                        <p>© 2025 NMIMS/SVKM Learning Management System</p>
                        <p className="mt-1">
                            <a href="#" className="hover:text-gray-700">Privacy Policy</a> •
                            <a href="#" className="hover:text-gray-700">Terms of Service</a> •
                            <a href="#" className="hover:text-gray-700">Accessibility</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;