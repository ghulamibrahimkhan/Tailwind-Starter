import Link from "next/link"
import Image from "next/image"

export default function Nav() {
    return (
        <>
            <header className="nav">
                <div className="flex-1">
                    <Image
                        src="/circleai.png"
                        alt="Logo"
                        height="100"
                            width="200"
                            className="nav-logo"
                    />
                </div>
                <ul className="flex-wrap mt-5">
                    <li><Link href="/" className="active">Profile</Link></li>
                    <li><Link href="/">Notifications</Link></li>
                    <li><Link href="/">Payments</Link></li>
                    <li><Link href="/">Payments</Link></li>
                    <li><Link href="/tailwind/landing">Landin Page</Link></li>
                </ul>
                <span className="flex-1 text-right">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-full">Join Us</button>
                </span>
            </header>
        </>
    )
}