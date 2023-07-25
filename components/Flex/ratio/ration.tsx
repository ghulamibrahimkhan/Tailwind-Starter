import Image from "next/image"
export default function Ratio(){
    return(
        <>
        <div className="ratio">
            <Image
            src="/vacation.jpg"
            alt="Vacation"
            width="200"
            height="200"
            className="ratioImg" 
            />
            <div className="details">
                <h1>Pool Side</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, delectus eligendi et non necessitatibus quos facilis amet!</p>
            </div>
        </div>
        </>
    )
}