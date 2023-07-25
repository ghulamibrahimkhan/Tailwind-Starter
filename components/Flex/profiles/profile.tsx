
import Image from "next/image"

interface ProfileDate {
    imageOf: string,
    nameOf: string,
    position: string,


}

export default function Profile(props: ProfileDate) {
    return (
        <>
            <div className="profile">
                <div className="team-profile">
                    <Image
                        className="team-profile-image"
                        src={props.imageOf}
                        alt="Employee image"
                        width={100}
                        height={100} />
                    <h3>{props.nameOf}</h3>
                    <p>{props.position}</p>
                </div>
            </div>
        </>
    )
}