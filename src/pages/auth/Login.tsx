import React, { type FormEvent } from "react";
import { Input } from "../../components/ui";


const Login: React.FC = () => {

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        throw new Error("Function not implemented.");
    }

    return (

        <div className="min-h-screen flex">
            <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="text-center mb-4 flex justify-center items-center mb-4">
                        <img src="/images/auth/nmims-logo.png" alt="" className="w-32 h-auto mb-2" />
                    </div>

                    <div className="animate-fade-in">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">NMIMS Portal</h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Sign in to access your academic dashboard
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow-lg rounded-lg border border-gray-200">
                        <form className="space-y-6" onSubmit={handleSubmit}>

                            <Input
                                type="text"
                                placeholder="Email Id"
                                className="email-id"
                                required={true}
                                icon="email"
                            />

                            <Input
                                type="text"
                                placeholder="Password"
                                className="password"
                                required={true}
                                icon="password"
                            />


                            <div className="flex items-center justify-between">

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-edu-blue hover:text-edu-navy transition-colors">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button type="submit"
                                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-edu-blue hover:bg-edu-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-edu-blue transition-colors duration-200">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <svg className="h-5 w-5 text-edu-light-blue group-hover:text-blue-300" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                    </span>
                                    Sign In to Portal
                                </button>
                            </div>
                        </form>

                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <div className="text-center space-y-2">
                                <p className="text-sm text-gray-600">
                                    Need help accessing your account?
                                </p>
                                <div className="flex justify-center space-x-4 text-sm">
                                    <a href="#" className="text-edu-blue hover:text-edu-navy font-medium">IT
                                        Support</a>
                                    <span className="text-gray-300">|</span>
                                    <a href="#" className="text-edu-blue hover:text-edu-navy font-medium">Portal
                                        Services</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="mt-8 text-center text-xs text-gray-500">
                        <p>© 2025 NMIMS/SVKM Learning Management System</p>
                        <p className="mt-1">
                            <a href="#" className="hover:text-gray-700">Privacy Policy</a> •
                            <a href="#" className="hover:text-gray-700">Terms of Service</a> •
                            <a href="#" className="hover:text-gray-700">Accessibility</a>
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Login;