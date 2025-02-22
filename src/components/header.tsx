import { PiLightbulbFilament } from "react-icons/pi";
import { useHighscore } from "../contexts/highscore.context";

export default function Header() {
  const { highScore } = useHighscore()

  return (
    <header >
      <div className=" max-w-7xl  mx-auto px-8  ">
        <div className=" flex justify-between items-center gap-2.5 py-3" >
          <div className="flex items-center">
            <PiLightbulbFilament className="text-5xl" />
            <p className=" text-2xl font-medium ">Quizo</p>
          </div>
          <div className=" font-medium">Highscore: {highScore}</div>
        </div>
      </div>
    </header>
  )
}
