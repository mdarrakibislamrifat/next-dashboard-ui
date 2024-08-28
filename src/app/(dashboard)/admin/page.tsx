import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import Usercard from "@/components/Usercard";


const Page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:2/3 flex flex-col gap-8">
        {/* USER cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <Usercard type="Student"/>
          <Usercard type="Teacher"/>
          <Usercard type="Parent"/>
          <Usercard type="Staff"/>
        </div>
        {/* MIDDLE CHART */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart/>
          </div>
          {/* attendence chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
          <AttendanceChart/>
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart/>
        </div>
      </div>

      {/*RIGHT  */}
      <div className="w-full lg:1/3">

      </div>
    </div>
  )
}

export default Page;
