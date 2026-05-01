import { LineChartIllustration } from "../../../public/images/LineChartIllustration"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../Table"

const summary = [
  {
    name: "Zone A - Level 1",
    value: "142 cars",
    capacity: "150 spots",
    revenue: "$2,840",
    occupancy: "+94.6%",
    efficiency: "+8.2%",
    turnover: "+5.1%",
    bgColor: "bg-green-500",
    changeType: "positive",
  },
  {
    name: "Zone B - Level 2",
    value: "98 cars",
    capacity: "120 spots",
    revenue: "$1,960",
    occupancy: "+81.6%",
    efficiency: "+6.4%",
    turnover: "+3.2%",
    bgColor: "bg-emerald-500",
    changeType: "positive",
  },
  {
    name: "Zone C - Rooftop",
    value: "31 cars",
    capacity: "80 spots",
    revenue: "$620",
    occupancy: "-38.7%",
    efficiency: "-12.1%",
    turnover: "-8.3%",
    bgColor: "bg-green-400",
    changeType: "negative",
  },
]

export default function FieldPerformance() {
  return (
    <div className="h-150 shrink-0 overflow-hidden mask-[radial-gradient(white_30%,transparent_90%)] perspective-[4000px] perspective-origin-center">
      <div className="-translate-y-10 -translate-z-10 rotate-x-10 rotate-y-20 -rotate-z-10 transform-3d">
        <h3 className="text-sm text-gray-500">Parking Occupancy Performance</h3>
        <p className="mt-1 text-3xl font-semibold text-gray-900">
          271 vehicles parked
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-700">+24 vehicles (9.7%)</span>{" "}
          <span className="font-normal text-gray-500">vs last week</span>
        </p>
        <LineChartIllustration className="mt-8 w-full min-w-200 shrink-0" />

        <TableRoot className="mt-6 min-w-200">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Zone</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Vehicles
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Capacity
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Revenue
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Occupancy
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Efficiency
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Turnover
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {summary.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium text-gray-900">
                    <div className="flex space-x-3">
                      <span
                        className={item.bgColor + " w-1 shrink-0 rounded"}
                        aria-hidden="true"
                      />
                      <span>{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{item.value}</TableCell>
                  <TableCell className="text-right">{item.capacity}</TableCell>
                  <TableCell className="text-right">{item.revenue}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-700"
                          : "text-red-700"
                      }
                    >
                      {item.occupancy}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-700"
                          : "text-red-700"
                      }
                    >
                      {item.efficiency}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-700"
                          : "text-red-700"
                      }
                    >
                      {item.turnover}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableRoot>
      </div>
    </div>
  )
}
