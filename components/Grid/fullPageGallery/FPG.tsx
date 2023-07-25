import Image from "next/image";

export default function FPG() {

    return (
        <>
            <div className="grid grid-cols-2 max-w-none w-auto min-w-[38rem] min-h-screen">
                <div className="item item1 bg-orange-500">Comfort Stay</div>
                <div className="item item2 bg-red-400">Outdoor Activities</div>
                <div className="item item3 bg-amber-300">Luxury Dinning</div>
                <div className="item item4 bg-fuchsia-300">Children Friendly</div>
            </div>
        </>
    )
}