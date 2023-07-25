import Image from "next/image"
export default function AlternateProfileList() {
    return (
        <>
            <div className="flex items-center odd:flex-row-reverse odd:text-right mt-4 mx-6 bg-slate-100 p-1 rounded-md">
                <div>
                    <Image
                        src='/female.jpeg'
                        alt="female"
                        height={100}
                        width={100} />
                </div>
                <div className="m-4">
                    <h2 className="font-medium text-base">Aleca Kardi</h2>
                    <h3 className="text-slate-500 text-sm">Founder and ceo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque non amet error facere laboriosam ipsam quo.</p>
                </div>
            </div>
        </>
    )
}