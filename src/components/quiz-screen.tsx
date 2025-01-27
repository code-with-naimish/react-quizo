import { useState } from "react";
import { QuestionModel } from "../_models/question.model";
import PrimaryBtn from "./primary-btn";
import { toast } from "react-toastify";

export default function QuizScreen(props: {
  dataArr: QuestionModel[]
}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeQuestion = props.dataArr[activeIndex];

  const options = [...activeQuestion.incorrectAnswers] // shallow copy of incorrect answer to avoid original array mutation
  const randomIndex = Math.floor(Math.random() * 4); // generating random index between 0 t0 3
  options.splice(randomIndex, 0, activeQuestion?.correctAnswer) // injecting answer between 0 to 3 index

  const handleNext = () => {

    setActiveIndex((prevIndex) => {

      const isLastIndex = props.dataArr.length - 1
      if (prevIndex < isLastIndex) {
        return prevIndex + 1

      } else {
        toast("This is last question", {
          type: "warning"
        })
        return prevIndex;
      }

    })
  }

  return (

    <div>
      {activeIndex + 1}   {activeQuestion.question.text}
      {options.map((option) => {
        return <div key={option}>
          {option}
        </div>
      })}
      <PrimaryBtn title="Next" onClick={handleNext} />
      {randomIndex}
    </div>
  )
}
