import { useState } from "react";
import { QuestionModel } from "../_models/question.model";
import PrimaryBtn from "./primary-btn";
import { toast } from "react-toastify";
import { DifficultyEnum } from "../_enums/difficulty.enum";
import { underscoreCapitalise } from "../_methods/helpers";
import { questionsLimit } from "../_methods/constants";

export default function QuizScreen(props: {
  dataArr: QuestionModel[]
  onSelectRightAnswer: () => void
  onFinish: () => void


}) {


  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const activeQuestion = props?.dataArr[activeIndex];


  const handleNext = () => {

    if (!selectedAnswer) {
      toast("Please select an answer", {
        type: "warning"
      })
      return
    }

    if (selectedAnswer === activeQuestion?.correctAnswer) {
      props.onSelectRightAnswer()
    }

    setActiveIndex((prevIndex) => {

      const isLastIndex = props?.dataArr?.length - 1
      if (prevIndex < isLastIndex) {
        return prevIndex + 1

      } else {
        // toast("This is last question", {
        //   type: "warning"
        // })
        props.onFinish()
        return prevIndex;
      }

    })

    setSelectedAnswer(null)

  }

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option)
  }

  return (

    <div className="card ">
      <div className="flex items-start justify-between gap-3 ">
        <div className="flex items-center mb-3 ">
          <div className="bg-blue-500/10 text-blue-500 cursor-pointer  font-medium text-xs  px-1.5 py-0.5 rounded-[99px] leading-none">
            {underscoreCapitalise(activeQuestion?.category)}
          </div>
          <div
            className={
              `${activeQuestion?.difficulty === DifficultyEnum.EASY ? 'bg-green-500/10 text-green-500' : ''} 
        ${activeQuestion?.difficulty === DifficultyEnum.MEDIUM ? ' bg-yellow-500/10 text-yellow-500' : ''}
        ${activeQuestion?.difficulty === DifficultyEnum.HARD ? ' bg-red-500/10 text-red-500' : ''}
        cursor-pointer  font-medium text-xs px-1.5 py-1 rounded-[99px] leading-none
        `}>
            {underscoreCapitalise(activeQuestion?.difficulty)}
          </div>
        </div>

        <p className="text-sm">{activeIndex + 1} / {questionsLimit}</p>

      </div>
      <h1 className=" break-words mt-2 mb-5 text-xl font-semibold leading-none text-black/80  ">
        <span className=" gradient-text">Q{activeIndex + 1}. </span>  {activeQuestion?.question.text}
      </h1>
      <ul className=" space-y-3">
        {activeQuestion?.options?.map((val, i: number) => {
          return <li className={`${selectedAnswer === val ? 'bg-blue-500/10 border-blue-500 text-blue-500' : 'border-stone-300'} cursor-pointer text-sm p-2 border rounded-lg`} onClick={() => handleAnswer(val)} key={val}>
            {i + 1}. {val}
          </li>
        })}
      </ul>
      <div className="flex justify-end mt-5">

        <PrimaryBtn title={activeIndex === props.dataArr.length - 1 ? 'Finish' : 'Next'} onClick={handleNext} />

      </div>
    </div>
  )
}
