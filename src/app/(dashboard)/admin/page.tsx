import Usercard from "@/components/Usercard";


const Page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:2/3">
        {/* USER cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <Usercard type="Student"/>
          <Usercard type="Teacher"/>
          <Usercard type="Parent"/>
          <Usercard type="Staff"/>
        </div>
      </div>

      {/*RIGHT  */}
      <div className="w-full lg:1/3">

      </div>
    </div>
  )
}

export default Page;
