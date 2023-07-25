import ProfileCard from "./profile-card"
export default function ProfileCards() {
    return(
        <>
        <div className="flex justify-around flex-wrap bg-slate-300 mt-5">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            
        </div>
        </>

    )
}