export default function PricingPlan() {
    return (
        <>
            <div className="flex max-w-7xl mt-3 m-auto gap-8">
                <div className="pricingPlanC">
                    <h2>Standard</h2>
                    <span>
                        Monthly Plan
                    </span>
                    <p>
                        $25
                    </p>
                </div>
                <div className="pricingPlanC bg-pink-600 text-white">
                    <h2>Popular</h2>
                    <span>
                        Monthly Plan
                    </span>
                    <p>
                        $40
                    </p>
                </div>
                <div className="pricingPlanC">
                    <h2>Premium</h2>
                    <span>
                        Monthly Plan
                    </span>
                    <p>
                        $55
                    </p>
                </div>
                <div className="pricingPlanC">
                    <h2>Premium</h2>
                    <span>
                        Monthly Plan
                    </span>
                    <p>
                        $55
                    </p>
                </div>
            </div>
        </>
    )
}