'use client';

import Link from "next/link";

function submitForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    
    fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                alert(data.error);
            } else {
                alert("Login successful");
            }
        });
}

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid gap-10">
                <form className="flex flex-col justify-center gap-10">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="name@email.com"
                            className="border border-gray-300 rounded-md px-4 py-2 text-black"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="border border-gray-300 rounded-md px-4 py-2 text-black"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
                        onClick={submitForm}
                    >
                        Login
                    </button>
                </form>
                <div className="flex justify-center items-center">
                    <p className="text-white">
                        Don&apos;t have an account?
                        <Link
                            href="/signup"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            {" "}
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
