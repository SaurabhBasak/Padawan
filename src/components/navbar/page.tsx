import Link from "next/link";

export default function Navbar() {
    return (
        <div className="grid grid-flow-col font-extrabold font-sans text-xl h-11 items-center">
            <Link
                href="/"
                className="relative left-28 top-2 w-32 h-10 border rounded-3xl flex justify-center items-center"
            >
                Padawan
            </Link>
            {/* <Link href="/login" className="relative justify-self-end top-2 right-7">Login</Link> */}
        </div>
    );
}
