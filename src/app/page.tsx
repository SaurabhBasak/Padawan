import Navbar from "@/components/navbar/page";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center gap-10">
                <h1 className="text-4xl font-bold w-2/3 text-center">
                    Find experienced peers to accelerate your learning
                </h1>
                <p className="text-lg w-1/3 text-center">
                    Padawan is a platform that connects you with experienced
                    peers who can help you learn new skills and grow in your
                    career.
                </p>
                <Link href="/login" className="bg-white hover:bg-slate-300 text-zinc-900 font-bold py-2 px-4 rounded transition-colors shadow-inner">Get Started</Link>
            </div>
        </div>
    );
}
