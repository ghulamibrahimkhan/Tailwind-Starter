
import MBPD from "@/components/Grid/blogPostDisplay/MBPD"
import ContacrForm from "@/components/Grid/contactForm/ContactForm"
import FPG from "@/components/Grid/fullPageGallery/FPG"
import ImageAndText from "@/components/Grid/imageAndText/ImageAndText"
import Menu from "@/components/Grid/menu/Menu"
import { ProfileCardGrid } from "@/components/Grid/profileCard/ProfileCardGrid"
import Rss from "@/components/Grid/rss/Rss"
import ServiceMg from "@/components/Grid/servicesGrid/ServicesMg"
import Tgs from "@/components/Grid/tgs/Tgs"

export default function Home() {
    return <>
        <div className="max-w-7xl mx-auto p-3 bg-slate-200">
            {/* <FPG /> */}
            {/* <FPG /> */}

            {/* Menu */}
            {/* <div className="md:flex justify-between bg-slate-200 p-2 rounded-md gap-x-6">
            <Menu />
            <Menu />
            </div> */}

            {/* Blog Page Display */}
            {/* <MBPD /> */}

            {/* Profile Card */}
            {/* <ProfileCardGrid /> */}

            {/* Secive Mg */}
            {/* <ServiceMg /> */}


            {/* Image and Text */}
            {/* <ImageAndText /> */}

            {/* Cntact Form */}
            {/* <ContacrForm /> */}

            {/* rss */}
            {/* <Rss /> */}

            <Tgs />
            
        </div>
    </>
}