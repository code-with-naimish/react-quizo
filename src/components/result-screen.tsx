
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
    message: string
  } | null = null;

  if (props.totalScore < 10) {
    result = {
      message: "You are Failed!",
      status: ResultStatusEnum.FAILED
    }

  } else if (props.totalScore >= highScore) {
    result = {
      message: "Bravo! You made a new Highscore",
      status: ResultStatusEnum.HIGHSCORE
    }
  } else {
    result = {
      message: "You are Passed!",
      status: ResultStatusEnum.PASSED
    }
  }


  return (

    <div>{result.message} {highScore}</div>
  )
}
