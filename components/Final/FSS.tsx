import { Rocket } from "lucide-react";
import { BsRocketTakeoff } from "react-icons/bs"
import { FaBullhorn } from "react-icons/fa"
import { AiOutlineFontColors } from "react-icons/ai"
import { CiKeyboard } from "react-icons/ci"
import { GoFileMedia } from "react-icons/go"
import { IoIosPeople } from "react-icons/io"

export default function FSS() {
    return (
        <>
            <section className="fss p-4 grid grid-flow-col grid-rows-6 sm:grid-rows-3 gap-12 mt-6 rounded shadow-2xl drop-shadow-lg">
                <div className="fst-div">
                    <BsRocketTakeoff className="fssIcon"/>
                    <div className="snd-div">
                        <h3>Buisness Strategy</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et molestiae quos architecto corporis!</p>
                    </div>
                </div>
                <div className="fst-div">
                    <FaBullhorn className="fssIcon" />
                    <div className="snd-div">
                        <h3>Marketing Planning</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et molestiae quos architecto corporis!</p>
                    </div>
                </div>
                <div className="fst-div">
                    <AiOutlineFontColors className="fssIcon" />
                    <div className="snd-div">
                        <h3>Copywriting Services</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et molestiae quos architecto corporis!</p>
                    </div>
                </div>
                <div className="fst-div">
                    <CiKeyboard className="fssIcon" />
                    <div className="snd-div">
                        <h3>Tech writing Services</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et molestiae quos architecto corporis!</p>
                    </div>
                </div>
                <div className="fst-div">
                    <GoFileMedia className="fssIcon" />
                    <div className="snd-div">
                        <h3>Teaching Videos</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et molestiae quos architecto corporis!</p>
                    </div>
                </div>
                <div className="fst-div">
                    <IoIosPeople className="fssIcon" />
                    <div className="snd-div">
                        <h3>Conference Speaking</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et molestiae quos architecto corporis!</p>
                    </div>
                </div>
            </section>
        </>
    )
}