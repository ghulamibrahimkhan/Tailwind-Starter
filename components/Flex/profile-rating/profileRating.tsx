import { Star } from "lucide-react";
import Image from "next/image";


export default function ProfileRating() {
    return (
        <>
            <div className="bg-teal-600 text-white flex w-96 items-center p-4 rounded mt-8 max-w-none  ">
                <Image
                className="w-15 h-14 object-cover mr-3 rounded-md"
                    src="/profile-rating.webp"
                    alt="picture"
                    height="65"
                    width="65"
                />
                <div>
                    <h1 className="text-2xl font-medium">Richard Gardner</h1>
                    <p className="text-sm opacity-90">Graphics Designer</p>
                </div>

                <Star className="m-1 ml-auto self-start"/>
            </div>
        </>
    )
}