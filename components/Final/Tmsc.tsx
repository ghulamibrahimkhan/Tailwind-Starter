import Image from "next/image";

export default function Tmsc() {
    return (
        <>
            <div className="mx-auto min-w-[20rem] max-w-[32rem] p-6 bg-white rounded">
                <div className="flex items-center">
                    <Image src="/avatar.png" alt="profile pic" height={50} width={50} className=" rounded-full w-16 h-16 border-2 border-green-400 ring-2 ring-blue-500 mr-3" />
                    <div>
                        <p className=" font-bold text-2xl mb-0.5">John Doe</p>
                        <p className=" text-gray-600 text-am">@johndoe</p>
                    </div>

                    {/* Followers */}
                    <div className=" ml-auto">
                        <div className="flex flex-row-reverse tmcImage ml-auto">
                            <Image src="/people1.jpeg" alt="profile pic" height={5} width={20} className="tmcImage" />
                            <Image src="/people2.jpeg" alt="profile pic" height={5} width={20} className="tmcImage" />
                            <Image src="/people3.jpeg" alt="profile pic" height={5} width={20} className="tmcImage" />
                            <Image src="/people1.jpeg" alt="profile pic" height={5} width={20} className="tmcImage" />
                            <Image src="/people2.jpeg" alt="profile pic" height={5} width={20} className="tmcImage" />
                            <Image src="/people3.jpeg" alt="profile pic" height={5} width={20} className="tmcImage" />
                        </div>
                        19K Followers
                    </div>
                </div>
                <div className=" mt-6 w-[25rem] sm:w-[32rem]">
                    Follow for Web Development & Productivity Tips & Resources. <strong>Laravel | Vue | Tailwind CSS | UI/UX</strong>
                </div>
                <div className="tmcStats grid grid-cols-2">
                    <div>
                        <p>Tweets</p>
                        <h3>293</h3>
                    </div>
                    <div>
                        <p>Tweets Impressions</p>
                        <h3>182k</h3>
                    </div>
                    <div>
                        <p>Profile Visits</p>
                        <h3>9242</h3>
                    </div>
                    <div>
                        <p>Mentions</p>
                        <h3>299</h3>
                    </div>
                </div>
            </div>
            <br />
            <Image src="/abc.svg" height={100} width={100} alt="aa"/>
        </>
    )
}

