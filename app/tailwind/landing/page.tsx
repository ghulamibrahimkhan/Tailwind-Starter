export default function LandingPage() {
    return (
        <>
            <div className="w-full h-screen flex flex-col max-w-none md:flex-row">

                <div className="flex justify-center items-center text-center bg-orange-200 basis-1/2">
                    <div className="">
                        <h1 className="text-5xl font-bold">Learn</h1>
                        <p className="text-base mt-6 mb-8">Build uour skillset with the hotest resourse </p>
                        <button className="bg-white p-2 font-medium rounded-md">Start Learning</button>
                    </div>
                </div>
                <div className="flex justify-center items-center text-center bg-sky-200 basis-1/2">
                    <div className="">
                        <h1 className="text-5xl font-bold">Teach</h1>
                        <p className="text-base mt-6 mb-8">Share your knowledge and earn some income</p>
                        <button className="bg-white p-2 font-medium rounded-md">Start Teaching</button>
                    </div>
                </div>
            </div>
        </>
    )
}