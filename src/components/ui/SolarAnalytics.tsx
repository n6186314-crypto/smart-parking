import {
  RiDropFill,
  RiNavigationFill,
  RiPieChartFill,
  RiRobot3Fill,
} from "@remixicon/react"
import { Divider } from "../Divider"
import AnalyticsIllustration from "./AnalyticsIllustration"
import { StickerCard } from "./StickerCard"

export function SolarAnalytics() {
  return (
    <section
      aria-labelledby="solar-analytics"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div>
        <h2
          id="solar-analytics"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-green-500"
        >
          ParkX Analytics
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-green-500" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Turn parking data into revenue with real-time insights
        </p>
      </div>
      <div className="*:pointer-events-none">
        <AnalyticsIllustration />
      </div>
      <Divider className="mt-0"></Divider>
      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          Icon={RiNavigationFill}
          title="Live Spot Tracking"
          description="Real-time occupancy updates from sensors across every parking zone."
        />
        <StickerCard
          Icon={RiRobot3Fill}
          title="Plate Recognition"
          description="AI-powered ANPR cameras identify vehicles at entry and exit automatically."
        />
        <StickerCard
          Icon={RiDropFill}
          title="Online Payments"
          description="Seamless digital payments with auto-billing on exit. No kiosk needed."
        />
        <StickerCard
          Icon={RiPieChartFill}
          title="Revenue Analytics"
          description="Advanced dashboard tracking occupancy rates, peak hours, and earnings."
        />
      </div>
    </section>
  )
}
