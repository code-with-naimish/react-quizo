import { PiLightbulbFilament } from "react-icons/pi";

export default function Header() {
  return (
    <header className="" >
      <div className=" max-w-7xl  mx-auto px-8  ">
        <div className=" flex justify-between items-center gap-2.5 py-3" >
          <div className="flex items-center">
            <PiLightbulbFilament className="text-5xl" />
            <p className=" text-2xl font-medium ">Quizo</p>
          </div>
          <div className=" font-medium">Highscore: 0</div>
        </div>
      </div>
    </header>
  )
}
