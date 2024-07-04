export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-12">
            <h2 className="text-4xl font-bold text-center">Page Not Found</h2>
            <p className="text-center">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
            </p>
        </div>
    );
}
