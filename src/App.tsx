import { useState } from "react"
import "./App.css"
import InitialScreen from "./Components/InitialScreen"
import QuizScreen from "./Components/QuizScreen"
import ResultScreen from "./Components/ResultScreen"
import { ScreenEnum } from "./_enums/screen.enum"


const App = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenEnum>(ScreenEnum.INIT)
  return (
    <main>
      {activeScreen === ScreenEnum.INIT ? <InitialScreen /> : null}
      {activeScreen === ScreenEnum.QUIZ ? <QuizScreen /> : null}
      {activeScreen === ScreenEnum.RESULT ? <ResultScreen /> : null}


    </main>


  )
}

export default App