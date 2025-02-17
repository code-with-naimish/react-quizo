import { FaTrophy } from "react-icons/fa";

enum ResultStatusEnum {
  FAILED = "FAILED",
  PASSED = "PASSED",
  HIGHSCORE = "HIGHSCORE"
}

export default function ResultScreen(props: {
  totalScore: number
}) {
  const highScore = 0;
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
      <div className="flex items-center justify-center flex-col gap-6">
        <div className="text-5xl ">
          <FaTrophy />
        </div>

        <h1 className="text-2xl font-medium">Congratulation</h1>
        <p>Your Score</p>
        <span className="text-3xl">4 / 10</span>
        <p>You did a great job. Learn more by taking another quiz</p>
      </div>
    </section>
  )
}
