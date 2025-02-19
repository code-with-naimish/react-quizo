import "./App.css"

import { useState } from "react"

import { ScreenEnum } from "./_enums/screen.enum"
import InitialScreen from "./components/initial-screen"
import QuizScreen from "./components/quiz-screen"
import ResultScreen from "./components/result-screen"
import Header from "./components/header"
import Footer from "./components/footer"
import { ToastContainer } from 'react-toastify';
import { QuestionModel } from "./_models/question.model"
import { HighscoreProvider } from "./contexts/highscore.context"


const App = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenEnum>(ScreenEnum.INIT);
  const [questionArr, setQuestionArr] = useState<QuestionModel[]>([]);
  const [totalScore, setTotalScore] = useState<number>(0)

  const handleQuestions = (arr: QuestionModel[]) => {
    setQuestionArr(arr);
    setActiveScreen(ScreenEnum.QUIZ)
  }

  const onSelectRightAnswer = () => {
    setTotalScore((prevScr) => prevScr + 1)
  }

  const renderLastScreen = () => {
    setActiveScreen(ScreenEnum.RESULT)

  }

  return (

    <>
      <HighscoreProvider >
        <div className=" min-h-screen">
          <Header />
          <main className="bg-gradient-to-r from-cyan-500 to-blue-500" >
            <div className=" h-[calc(100vh-120px)] flex justify-center items-center ">
              <div className="max-w-3xl px-8 mx-auto w-full" >
                {activeScreen === ScreenEnum.INIT ? <InitialScreen onGetStarted={handleQuestions} /> : null}
                {activeScreen === ScreenEnum.QUIZ ? <QuizScreen dataArr={questionArr} onSelectRightAnswer={onSelectRightAnswer} onFinish={renderLastScreen} /> : null}
                {activeScreen === ScreenEnum.RESULT ? <ResultScreen totalScore={totalScore} /> : null}
              </div>
            </div>
          </main>

          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            theme="light"
          />
        </div>
      </HighscoreProvider>
    </>
  )
}

export default App;