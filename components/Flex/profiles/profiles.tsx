import Profile from "./profile"
export default function Profiles() {
    return (
        <>
            <div className="profile">
                <Profile imageOf="/female.jpeg" nameOf="Alexa Kardi" position="Founder and CEO" />
                <Profile imageOf="/male.jpeg" nameOf="Tavel Monare" position="Ui/Ux Designer" />
                <Profile imageOf="/female.jpeg" nameOf="Alexa Kardi" position="Founder and CEO" />
                <Profile imageOf="/male.jpeg" nameOf="Tavel Monare" position="Ui/Ux Designer" />
                <Profile imageOf="/female.jpeg" nameOf="Alexa Kardi" position="Founder and CEO" />
                <Profile imageOf="/male.jpeg" nameOf="Tavel Monare" position="Ui/Ux Designer" />
            </div>
        </>
    )
}