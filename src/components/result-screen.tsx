import { BsTrophy } from "react-icons/bs";
import { useHighscore } from "../contexts/highscore.context";

enum ResultStatusEnum {
  FAILED = "FAILED",
  PASSED = "PASSED",
  HIGHSCORE = "HIGHSCORE"
}

export default function ResultScreen(props: {
  totalScore: number
}) {

  const { highScore } = useHighscore()


  let result: {
    status: ResultStatusEnum,
    title: string,
    subTitle: string
  } | null = null;

  if (props.totalScore < 10) {
    result = {
      title: "Failed",
      subTitle: "You are Failed!",
      status: ResultStatusEnum.FAILED
    }

  } else if (props.totalScore >= highScore) {
    result = {
      title: "Highscore",
      subTitle: "Bravo! You made a new Highscore",
      status: ResultStatusEnum.HIGHSCORE
    }
  } else {
    result = {
      title: "Congratulation",
      subTitle: "You are Passed!",
      status: ResultStatusEnum.PASSED
    }
  }


  return (
    <section className="card">
      <div className="flex items-center justify-center flex-col text-center ">
        <div className="  bg-green-500/10 text-green-500 flex-none w-28 h-28 rounded-full flex items-center justify-center">
          <BsTrophy className="text-5xl " />
        </div>


        <h1 className="text-2xl font-medium">{result.title}</h1>
        <p>Your Score</p>
        <span className="text-3xl">{props.totalScore} / 20</span>
        <p>{result.subTitle}</p>
      </div>
    </section>
  )
}
