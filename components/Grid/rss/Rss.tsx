import Image from "next/image";

export default function Rss() {
    return (
        <>
            <div className="rss p-6 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 max-w-7xl mx-auto bg-white">
                <Image className="sm:row-span-2 w-full max-w-md m-auto" src="/rss.png" width={1000} height={1000} alt="rss" />
                <div className=" d:col-start-1 md:row-start-1 flex flex-col justify-center">
                    <div>
                        <h3>List Building</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, veniam nihil. Voluptas facilis, quam   maxime consectetu</p>
                    </div>
                    <div>
                        <h3>Campaing Tracker</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, veniam nihil. Voluptas facilis, quam maxime</p>
                    </div>
                    <div>
                        <h3>Campaing Tracker</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, veniam nihil. Voluptas facilis, quam maxime</p>
                    </div>
                </div>
                {/* div 2 */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h3>Admin Control</h3>
                        <p>Rights of users and admins can easily be managed through the control panel</p>
                    </div>
                    <div>
                        <h3>Integration Setup</h3>
                        <p>Were providing a step-by-step integration session to implement automation</p>
                    </div>
                    <div>
                        <h3>Help Line Support</h3>
                        <p>Quality support is our top priority so please contact us for any problem you encounter</p>
                    </div>
                </div>
            </div>
        </>
    )
}