import Image from "next/image"

export default function ProfileCard() {
    return(
        <>
        <div className="profile-card-main m-6 rounded-lg">
            <div className="profile-card">
                <Image
                src="/male.jpeg"
                alt="Employee dp"
                width={50}
                height={50}
                className="profle-card-img"
                 />
                 <div>
                    <h1>Matt Cooper</h1>
                    <p>Designer - CircleAI</p>
                 </div>
            </div>
            
        </div>
        </>

    )
}