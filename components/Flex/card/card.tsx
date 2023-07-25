import Link from "next/link"
export default function Card() {
    return (
        <>
            <div>
                <div className="card">
                    <h1>CSS Flex & Grid</h1>
                    <p>This book takes a completely different approach. I won&#39;t teach you the things flex and grid can do. Instead, I will first show you some components and layouts and make you think how to build them using the CSS concepts you already know. Now you have a problem, and you want a solution.</p>
                    <div className="bothLinks">
                        <Link className="link" href="#">Prev</Link>
                        <Link className="link" href="#">Next</Link>
                    </div>
                </div>
            </div>
        </>
    )
}