import { QuestionModel } from "../_models/question.model";

export default function QuizScreen(props: {
  dataArr: QuestionModel[]
}) {
  console.log(props.dataArr[0].id);
  return (
    <div>QuizScreen</div>
  )
}
