import Link from "next/link";

export default function signup() {
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
                    >
                        Signup
                    </button>
                </form>
                <div className="flex justify-center items-center">
                    <p className="text-white">
                        Have an account?
                        <Link
                            href="/login"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            {" "}
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}