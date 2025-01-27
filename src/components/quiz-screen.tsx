import { useState } from "react";
import { QuestionModel } from "../_models/question.model";
import PrimaryBtn from "./primary-btn";
import { toast } from "react-toastify";

export default function QuizScreen(props: {
  dataArr: QuestionModel[]
}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeQuestion = props.dataArr[activeIndex];

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
      <PrimaryBtn title="Next" onClick={handleNext} />
    </div>
  )
}
