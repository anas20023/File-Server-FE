const arr = ["Files", "Images", "Others"];
const arrn = [10, 20, 20];
export default function Home() {
    return (
        <>
            <section className="flex flex-col justify-center items-center bg-sky-500 h-full w-full font-[poppins]">
                <h1 className="text-4xl font-medium text-white px-6 py-6">Dashboard</h1>
            </section>
            <div className="flex flex-col justify-center items-center mt-10">
                <h1 className="text-slate-800  text-center text-2xl font-bold">File Access</h1>
                <div className="flex flex-row justify-between items-center px-4 py-8 gap-12">
                    <a href="#" className="block bg-sky-600 rounded text-white px-4 py-2 font-medium">Upload Files</a>
                    <a href="#" className="block bg-green-600 rounded text-white px-4 py-2 font-medium">View Files</a>
                    <a href="#" className="block bg-red-600 rounded text-white px-4 py-2 font-medium">Logout</a>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
                <h1 className="text-slate-800  text-center text-2xl font-bold">File Statistics</h1>
                <div className="flex flex-row justify-between items-center px-4 py-8 gap-12">
                    {
                        arr.map((item, item2) =>
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-slate-800 text-2xl font-bold">{item}</h1>
                                <p className="text-slate-800 text-xl font-medium">{arrn[item2]}</p>
                            </div>)
                    }
                </div>
            </div>
        </>
    )
}
