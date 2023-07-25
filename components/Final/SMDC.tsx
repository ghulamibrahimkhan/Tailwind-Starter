import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";




export default function SMDC() {
    return (
        <>
            <div className="smdc mx-auto gap-8 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] bg-slate-900 place-content-center p-8">
                <div className="smdDiv grid grid-cols-2 gap-8">
                    <div className="">Page Views</div>
                    <Instagram className="ml-auto text-red-600 " />
                    <div className=" text-3xl">117</div>
                    <p className="text-green-500 ml-auto self-end">+3%</p>
                </div>

                <div className="smdDiv grid grid-cols-2 gap-8">
                    <div className="">Page Views</div>
                    <Facebook className="ml-auto text-blue-600 " />
                    <div className=" text-3xl">117</div>
                    <p className="text-red-500 ml-auto self-end">+3%</p>
                </div>
                <div className="smdDiv grid grid-cols-2 gap-8">
                    <div className="">Page Views</div>
                    <Twitter className="ml-auto text-blue-400" />
                    <div className=" text-3xl">117</div>
                    <p className="text-green-500 ml-auto self-end">+3%</p>
                </div>
                <div className="smdDiv grid grid-cols-2 gap-8">
                    <div className="">Page Views</div>
                    <Instagram className="ml-auto  text-red-600 " />
                    <div className=" text-3xl">117</div>
                    <p className="text-green-500 ml-auto self-end">+3%</p>
                </div>
                <div className="smdDiv grid grid-cols-2 gap-8">
                    <div className="">Page Views</div>
                    <Youtube className="ml-auto text-red-500" />
                    <div className=" text-3xl">117</div>
                    <p className="text-red-500 ml-auto self-end">+3%</p>
                </div>
                <div className="smdDiv grid grid-cols-2 gap-8">
                    <div className="">Page Views</div>
                    <Instagram className="ml-auto text-red-500" />
                    <div className=" text-3xl">117</div>
                    <p className="text-green-500 ml-auto self-end">+3%</p>
                </div>
                <div className="smdDiv grid grid-cols-2 gap-8">
                    <div className="">Page Views</div>
                    <Twitter className="ml-auto text-blue-500 " />
                    <div className=" text-3xl">117</div>
                    <p className="text-red-500 ml-auto self-end">+3%</p>
                </div>
                <div className="smdDiv grid grid-cols-2 gap-8">
                    <div className="">Page Views</div>
                    <Youtube className="ml-auto text-red-500" />
                    <div className=" text-3xl">117</div>
                    <p className="text-green-500 ml-auto self-end">+3%</p>
                </div>
            </div>
        </>
    )
}