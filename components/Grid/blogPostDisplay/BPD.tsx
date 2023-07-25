import Image from "next/image";
import Link from "next/link";
import { Interface } from "readline";


interface BdpProps {
    img : string,
    heading:  string,
    para : string 
}
export default function BPD(Props: BdpProps){
    return(
        <>
        <div className="p-5 min-w-[15rem] bg-white rounded">
            <Image width="400" height="200" src={Props.img} alt="Image" className="object-cover w-full h-48 rounded-t-lg"/>
            <h3 className=" text-xl font-bold mt-2">{Props.heading}</h3>
            <p className="my-2">{Props.para}</p>
            <Link className=" text-purple-800 font-bold" href="/">Read More</Link>
        </div>
        </>
    )
}