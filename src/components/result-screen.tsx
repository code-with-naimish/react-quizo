import { BsTrophy } from "react-icons/bs";
import { useHighscore } from "../contexts/highscore.context";
import { ReactNode, useEffect } from "react";
import { failedScore, questionsLimit } from "../_methods/constants";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";


export default function ResultScreen(props: {
  totalScore: number
}) {

  const { highScore, setHighscore } = useHighscore()


  let result: {
    title: string,
    subTitle: string
    icon: ReactNode
    className: string
  } | null = null;

  if (props.totalScore < failedScore) {
    result = {
      title: "Failed",
      subTitle: "You are Failed!",
      icon: <IoClose />,
      className: "bg-red-500/10 text-red-500"
    }

  } else if (props.totalScore >= highScore) {
    result = {
      title: "Highscore",
      subTitle: "Bravo! You made a new Highscore",
      icon: <BsTrophy />,
      className: "bg-green-500/10 text-green-500"

    }
  } else {
    result = {
      title: "Congratulation",
      subTitle: "You are Passed!",
      icon: <FaCheck />,
      className: "bg-green-500/10 text-green-500"
    }
  }

  useEffect(() => {
    if (props?.totalScore > highScore) {
      localStorage.setItem("high-score", String(props.totalScore))
      setHighscore(props.totalScore);
    }
  }, [highScore, props.totalScore, setHighscore])

  return (
    <section className="card">
      <div className="flex items-center justify-center flex-col text-center">
        <div className={`text-5xl ${result.className} flex-none w-28 h-28 rounded-full flex items-center justify-center`}>
          {result.icon}
        </div>


        <h1 className="text-2xl font-medium">{result.title}</h1>
        <p>Your Score</p>
        <span className="text-3xl">{props.totalScore} / {questionsLimit}</span>
        <p>{result.subTitle}</p>
      </div>
    </section >
  )
}
