import { BarChart2, Heart, MessageCircle, MoreHorizontal, Repeat, Upload } from "lucide-react"
import Image from "next/image"

export default function Tweet() {
    return (
        <>
            <div className="min-w-[24rem] text-[0.9rem] text-gray-800;">
                <div className="max-w-xl my-24 mx-auto p-3 border border-gray-200 bg-white">
                <div className=" max-w-2xl">
                <div className="flex mt-8 p-8">
                        <Image src="/male.jpeg" alt="profile pic"
                            height="100" width="100" className="w-32 h-16 object-cover rounded-full mr-3"/>
                    <div>
                    <div>
                        <div className="flex">
                            <div className=" flex gap-x-2">
                                <span className=" text-slate-800 font-bold">Toby Margurie</span>
                                <span>@tobieEmail</span>
                                <span>. 16 June</span>
                            </div>
                            <div className="p-1 ml-auto">
                                <MoreHorizontal />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, consequatur beatae nihil possimus culpa repudiandae reiciendis eius commodi id</p>
                    </div>
                    <div className="flex justify-between  text-[0.8rem] text-gray-600 max-w-md mt-2 pr-10">
                        <MessageCircle />
                        <Repeat />
                        <Heart />
                        <Upload />
                        <BarChart2 />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

