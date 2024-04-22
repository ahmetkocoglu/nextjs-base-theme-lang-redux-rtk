import React from 'react';
import Login from "@/components/auth/login";
import Register from "@/components/auth/register";
import ForgotPassword from "@/components/auth/forgot-password";

const AllPage = ({params}: {params: { all: string }}) => {
    if (params.all === 'login'){
        return (
            <Login />
        );
    } else if (params.all === 'register'){
        return (
            <Register />
        );
    } else if (params.all === 'forgot-password'){
        return (
            <ForgotPassword />
        );
    } else {
        return (
            <div className="min-h-screen w-full">
                {params.all}
            </div>
        );
    }
};

export default AllPage;