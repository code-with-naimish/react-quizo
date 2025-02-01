import { useState } from "react";
import { QuestionModel } from "../_models/question.model";
import PrimaryBtn from "./primary-btn";
import { toast } from "react-toastify";
import { DifficultyEnum } from "../_enums/difficulty.enum";

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
  console.log(activeQuestion);

  return (

    <div className="card ">
      <div className="flex items-center gap-3 ">
        {/* <div className=" mt-5 mb-5 text-xl font-semibold leading-none ">
          {activeIndex + 1}   {activeQuestion.question.text}
        </div> */}
        <div className="bg-blue-500/10 text-blue-500 cursor-pointer  font-medium text-xs  px-1.5 py-0.5 rounded-[99px] leading-none">{activeQuestion.category}</div>
        <div
          className={
            `${activeQuestion.difficulty === DifficultyEnum.EASY ? 'bg-green-500/10 text-green-500' : ''} 
        ${activeQuestion.difficulty === DifficultyEnum.MEDIUM ? ' bg-yellow-500/10 text-yellow-500' : ''}
        ${activeQuestion.difficulty === DifficultyEnum.HARD ? ' bg-red-500/10 text-red-500' : ''}
        cursor-pointer  font-medium text-xs px-1.5 py-1 rounded-[99px] leading-none
        `}>
          {activeQuestion.difficulty}
        </div>
      </div>
      <div className=" mt-2 mb-5 text-xl font-semibold leading-none text-black/80  ">
        {activeIndex + 1}   {activeQuestion.question.text}
      </div>
      {options.map((option) => {
        return <div key={option}>
          {option}
        </div>
      })}

      <div className="flex justify-end">
        <PrimaryBtn title="Next" onClick={handleNext} />
      </div>

    </div>
  )
}

//className="bg-blue-500 border-blue-500 text-white cursor-pointer  font-medium text-xs px-1.5 py-0.5 rounded-[99px]"