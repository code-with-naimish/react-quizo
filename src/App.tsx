import "./App.css"

import { useState } from "react"

import { ScreenEnum } from "./_enums/screen.enum"
import InitialScreen from "./components/initial-screen"
import QuizScreen from "./components/quiz-screen"
import ResultScreen from "./components/result-screen"
import Header from "./components/header"
import Footer from "./components/footer"




const App = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenEnum>(ScreenEnum.INIT);
  const onSuccess = (screen: ScreenEnum) => {
    setActiveScreen(screen)
  }
  return (


    <div className=" min-h-screen">
      <Header />

      <main className=" bg-gray-300" >
        <div className=" h-[calc(100vh-120px)] flex justify-center items-center ">
          <div className="max-w-5xl px-8 mx-auto w-full" >
            {activeScreen === ScreenEnum.INIT ? <InitialScreen /> : null}
            {activeScreen === ScreenEnum.QUIZ ? <QuizScreen /> : null}
            {activeScreen === ScreenEnum.RESULT ? <ResultScreen /> : null}
          </div>
        </div>
      </main>

      <Footer />
    </div>

  )
}

export default App;