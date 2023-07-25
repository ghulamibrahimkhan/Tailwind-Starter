import Link from "next/link"
import BC from "@/components/Flex/quote/bc"
import Nav from "@/components/Flex/nav/nav"
import Profiles from "@/components/Flex/profiles/profiles"
import Cards from "@/components/Flex/card/cards"
import ProfileCards from "@/components/Flex/profileCard/profle-cards"
import ServiceSections from "@/components/Flex/service-section/service-sections"
import AlternateProfileList from "@/components/Flex/alternate-profile-list/alternate-profile-list"
import Itinerary from "@/components/Flex/itinerary/itinerary"
import PricingPlan from "@/components/Flex/pricing-plans/pricingPlans"
import Ratio from "@/components/Flex/ratio/ration"
import ProfileRating from "@/components/Flex/profile-rating/profileRating"
import Tweet from "@/components/Flex/tweet/tweet"

export default function Home() {
    return (
        <>
            <div className="bg-slate-200 max-w-7xl px-9 mx-auto">
                {/* Nav */}
                <Nav />

                {/* Alternate profile list */}
                <div className="max-w-7xl mx-auto mt-16 bg-white p-6 rounded-lg">
                    <AlternateProfileList />
                    <AlternateProfileList />
                </div>

                {/* Tweet */}
                <div className="flex flex-wrap justify-between gap-1">
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                </div>

                {/* Profile Rating */}
                <div className="max-w-7xl flex flex-wrap justify-between content-between">
                    <ProfileRating />
                    <ProfileRating />
                    <ProfileRating />
                    <ProfileRating />
                    <ProfileRating />
                    <ProfileRating />
                </div>

                {/* Ratio */}
                <Ratio />

                {/* Pricing Ui */}
                <PricingPlan />

                {/* itinerary */}
                <Itinerary />
                <Itinerary />
                <Itinerary />

                {/* Service Sections */}
                <ServiceSections />

                {/* Profiles */}
                <Profiles />

                {/* Card */}
                <Cards />

                {/* Profile Card */}
                <ProfileCards />

                {/* Quotes */}
                <BC />
            </div>
        </>
    )
}
