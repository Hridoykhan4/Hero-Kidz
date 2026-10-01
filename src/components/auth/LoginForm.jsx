'use client'
import { signIn } from "next-auth/react";

const LoginForm = () => {
    return (
        <div>
            <button onClick={() => signIn()}>Signin</button>
        </div>
    );
};

export default LoginForm;