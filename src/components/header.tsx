import { PiLightbulbFilament } from "react-icons/pi";
import { useHighscore } from "../contexts/highscore.context";

export default function Header() {
  const { highScore } = useHighscore()

  return (
    <header >
      <div className=" max-w-7xl  mx-auto px-8  ">
        <div className=" flex justify-between items-center gap-2.5 py-3" >
          <div className="flex items-center">
            <PiLightbulbFilament className="md:text-5xl text-4xl" />
            <p className=" md:text-2xl text-xl font-medium ">Quizo</p>
          </div>
          <p className=" font-medium md:text-base text-sm">Highscore: {highScore}</p>
        </div>
      </div>
    </header>
  )
}
