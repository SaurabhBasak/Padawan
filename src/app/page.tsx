import Navbar from "@/components/navbar/page";
import Link from "next/link";

export default function Home() {
    return (
        <div id="main-body">
            <Navbar />
            <div className="flex flex-col relative top-32 justify-center items-center gap-24">
                <h1 className="text-6xl font-extrabold font-sans w-2/3 text-center">
                    Find experienced peers to <span className="h-20 bg-gradient-to-r from-blue-400 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">accelerate your learning</span>
                </h1>
                <p className="text-xl w-1/2 text-center">
                    Padawan is a platform that connects you with experienced
                    peers who can help you learn new skills and grow in your
                    career.
                </p>
                <Link href="/login" className="border hover:border-2 text-white font-semibold py-2 px-4 rounded transition-all">Get Started</Link>
            </div>
        </div>
    );
}
