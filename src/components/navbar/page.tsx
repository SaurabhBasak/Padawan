import Link from "next/link";

export default function Navbar() {
    return (
        <div className="grid grid-flow-col">
            <Link href="/" className="relative py-2 px-3">Padawan</Link>
            <Link href="/login" className="justify-self-end py-2 px-3">Login</Link>
        </div>
    );
}