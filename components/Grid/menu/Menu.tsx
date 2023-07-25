export default function Menu() {
    return (
        <>
            <div className="grid min-w-[20rem] md:grid-cols-[1fr,auto] bg-white p-3 rounded-md">
                <div className=" my-4">
                    <h3 className=" text-2xl font-bold">Veg Burger</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque hic eligendi</p>
                </div>
                <span className="text-4xl my-6 "> 🍔 </span>
                <div className=" my-4">
                    <h3 className=" text-2xl font-bold">Tacos</h3>
                    <p>Quos sunt non labore ab dicta ea sequi error, sapiente asperiores quas.</p>
                </div>
                <span className="text-4xl my-6"> 🌮 </span>
                <div className=" my-4">
                    <h3 className=" text-2xl font-bold">Classic Waffles</h3>
                    <p>Dolorem nesciunt minima reprehenderit natus nam ipsum ipsa, laudantium.</p>
                </div>
                <span className="text-4xl my-6"> 🧇 </span>
            </div>

        </>
    )
}